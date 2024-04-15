const extendedSpacing = {
    spacing: {},
};

for (let i = 1; i <= 170; i++) {
    extendedSpacing.spacing[i] = `${i * 0.25}rem`;
}

for (let i = 1; i <= 11; i++) {
    const fraction = i / 12;
    extendedSpacing.spacing[`${i}/12`] = `${fraction * 100}%`;
}

const extendedBorder = {
    borderWidth: {},
};

for (let i = 1; i <= 8; i++) {
    extendedBorder.borderWidth[i] = `${i}px`;
}
const zIndexValues = {
    zIndex: {},
};

for (let i = 0; i <= 100; i += 10) {
    zIndexValues.zIndex[i] = i;
}
/** @type {import('tailwindcss').Config}  */
module.exports = {
    content: ["./front/*.html", "./node_modules/tw-elements/dist/js/**/*.js"],
    theme: {
        fontFamily: {
            Vazir: ["Vazir"],
            Yekan: ["Yekan"],
            nastaliq: ["nastaliq"],
        },
        extend: {
            ...extendedSpacing,
            ...extendedBorder,
            ...zIndexValues,

            boxShadow: {
                "inner-sm": "inset 0 0 4px 0 rgba(0, 0, 0, 0.06)",
                "inner-md": "inset 0 0 6px -1px rgba(0, 0, 0, 0.1)",
                "inner-lg": "inset 0 0 15px -3px rgba(0, 0, 0, 0.1)",
                "inner-xl": "inset 0 0 25px -5px rgba(0, 0, 0, 0.1)",
                "inner-2xl": "inset 0 0 50px -12px rgba(0, 0, 0, 0.25)",
                "inner-3xl": "inset 0 0 60px -15px rgba(0, 0, 0, 0.3)",
                "inner-4xl": "inset 0 0 70px -15px rgba(0, 0, 0, 0.4)",
                "inner-sm-top": "inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06)",
                "inner-md-top": "inset 0 -4px 6px -1px rgba(0, 0, 0, 0.1)",
                "inner-lg-top": "inset 0 -10px 15px -3px rgba(0, 0, 0, 0.1)",
                "inner-xl-top": "inset 0 -20px 25px -5px rgba(0, 0, 0, 0.1)",
                "inner-2xl-top": "inset 0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
                "inner-3xl-top": "inset 0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
                "inner-4xl-top": "inset 0 -50px 70px -15px rgba(0, 0, 0, 0.4)",
                "inner-sm-bottom": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
                "inner-md-bottom": "inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                "inner-lg-bottom": "inset 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                "inner-xl-bottom": "inset 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                "inner-2xl-bottom": "inset 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                "inner-3xl-bottom": "inset 0 35px 60px -15px rgba(0, 0, 0, 0.3)",
                "inner-4xl-bottom": "inset 0 50px 70px -15px rgba(0, 0, 0, 0.4)",
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
};
