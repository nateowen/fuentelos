"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export const useRevealer = () => {
    useGSAP(() => {
        gsap.to(".revealer", {
            scaleY: 0,
            duration: 1.25,
            delay: 0.4,
            ease: "hop",
        });
    }, {});
};