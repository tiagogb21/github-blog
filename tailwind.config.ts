import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                project: {
                    blue: "#3294F8",
                    blue1: "#14589C",
                    base: {
                        title: "#E7EDF4",
                        subtitle: "#C4D4E3",
                        text: "#AFC2D4",
                        span: "#7B96B2",
                        label: "#3A536B",
                        border: "#1C2F41",
                        post: "#112131",
                        profile: "#0B1B2B",
                        background: "#071422",
                        input: "#040F1A",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
