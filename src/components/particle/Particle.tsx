import {useEffect} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import type {Engine} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim";

export const Particle = () => {

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
        });
    }, []);

    return (
        <Particles
            id="tsparticles"
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#FFFFFF",
                    },
                    links: {
                        color: "#FFFFFF",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {min: 0.5, max: 3},
                    },
                },
                detectRetina: true,
            }}
        />
    );
};