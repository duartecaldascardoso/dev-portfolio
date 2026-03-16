export const semanticTokens = {
    colors: {
        brand: {
            solid: { value: "{colors.gray.900}" },
            contrast: { value: "white" },
            fg: { value: "{colors.gray.700}" },
            muted: { value: "{colors.gray.200}" },
            subtle: { value: "{colors.gray.100}" },
            emphasized: { value: "{colors.gray.300}" },
            focusRing: { value: "{colors.gray.500}" },
            light: { value: "white" },
        },
        bg: {
            main: { value: { base: "white", _dark: "white" } },
            muted: { value: { base: "{colors.gray.50}", _dark: "{colors.gray.50}" } },
        },
    },
};