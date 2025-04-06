"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { useSpring, animated, SpringConfig, AnimatedProps } from "@react-spring/web";

interface AnimatedContentProps {
    children: ReactNode;
    distance?: number;
    direction?: "vertical" | "horizontal";
    reverse?: boolean;
    config?: SpringConfig;
    initialOpacity?: number;
    animateOpacity?: boolean;
    scale?: number;
    threshold?: number;
    delay?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
    children,
    distance = 100,
    direction = "horizontal",
    reverse = false,
    config = { tension: 50, friction: 12 },
    initialOpacity = 0.2,
    animateOpacity = true,
    scale = 1,
    threshold = 0.1,
    delay = 0,
}) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    observer.unobserve(element);
                    setTimeout(() => {
                        setInView(true);
                    }, delay);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, delay]);

    const directions: Record<"vertical" | "horizontal", string> = {
        vertical: "Y",
        horizontal: "X",
    };

    const springProps = useSpring({
        from: {
            transform: `translate${directions[direction]}(${reverse ? `-${distance}px` : `${distance}px`
                }) scale(${scale})`,
            opacity: animateOpacity ? initialOpacity : 1,
        },
        to: inView
            ? {
                transform: `translate${directions[direction]}(0px) scale(1)`,
                opacity: 1,
            }
            : undefined,
        config,
    });

    const animatedDivProps: AnimatedProps<{ style: React.CSSProperties }> = {
        style: springProps,
    };

    return (
        <div ref={ref}>
            <animated.div {...animatedDivProps}>
                {children}
            </animated.div>
        </div>
    );
};

export default AnimatedContent;
