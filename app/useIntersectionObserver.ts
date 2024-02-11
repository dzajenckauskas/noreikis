import { useEffect } from 'react';

const useIntersectionObserver = (targetRef: React.RefObject<HTMLElement>, animationClass: string) => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const classes = animationClass.split(' '); // Split classes
                    entry.target.classList.add(...classes); // Spread the classes
                } else {
                    const classes = animationClass.split(' '); // Split classes
                    entry.target.classList.remove(...classes); // Remove the classes
                }
            });
        });

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => observer.disconnect();
    }, [targetRef, animationClass]);
};

export default useIntersectionObserver;
