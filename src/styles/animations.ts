export const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

export const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
};

export const heroAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
        opacity: 1,
        scale: 1
    },
    transition: { duration: 0.8, ease: "easeOut" }
};

export const cardHover = {
    whileHover: {
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.98 }
};

export const buttonHover = {
    whileHover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.95 }
};