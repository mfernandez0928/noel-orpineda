import { initModal } from './modal.js';
import { initGallery } from './gallery.js';
import { animate, inView, stagger } from "motion";

document.addEventListener('DOMContentLoaded', () => {
    initModal();
    initGallery();

    // Hero Animations
    animate(
        "header h1, header p, header .flex",
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.1), duration: 0.8, easing: "ease-out" }
    );

    // Section Animations
    inView("#how-to-join .step-card", (info) => {
        animate(
            info.target,
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.6, easing: "ease-out" }
        );
    });

    inView("#brokers .broker-card", (info) => {
        animate(
            info.target,
            { opacity: [0, 1], y: [40, 0] },
            { duration: 0.8, easing: "ease-out", delay: stagger(0.1) }
        );
    });

    inView("#outcomes h2, #outcomes p, #outcomes .hidden", (info) => {
        animate(
            info.target,
            { opacity: [0, 1], x: [-20, 0] },
            { duration: 0.8, easing: "ease-out" }
        );
    });
});
