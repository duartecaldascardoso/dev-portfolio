export const semanticTokens = {
    colors: {
        brand: {
            solid: { value: "{colors.brand.500}" },
            contrast: { value: "{colors.brand.50}" },
            fg: { value: "{colors.brand.700}" },
            muted: { value: "{colors.brand.200}" },
            subtle: { value: "{colors.brand.100}" },
            emphasized: { value: "{colors.brand.300}" },
            focusRing: { value: "{colors.brand.500}" },
            light: { value: "white" },
        },
        bg: {
            main: { value: { base: "white", _dark: "#111111" } },
            muted: { value: { base: "{colors.gray.50}", _dark: "#1a1a1a" } },
        },
    },
};