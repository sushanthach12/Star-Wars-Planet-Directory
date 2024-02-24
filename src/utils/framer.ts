export const LogoAnimation = {
    initial: { sacle: 0, opacity: 0 },
    animate: { 
        sacle: 1, 
        opacity: 1,
        transition: { delay: 0.5, duration: 0.8, ease: 'easeInOut' }
    },
};

export const characterAnimation = {
    hidden: {
        opacity: 0,
        y: `0.25em`,
        hidden: true
    },
    visible: {
        opacity: 1,
        y: `0em`,
        transition: {
            delay: 0.5,
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
};

export const scrollAnimation = {
    hidden: {
        opacity: 0,
        rotate: 90,
        y: `0.25em`,
    },
    visible: {
        opacity: 1,
        rotate: 90,
        y: `0em`,
        transition: {
            delay: 0.5,
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
    },
};