import { createSystem, defaultConfig } from "@chakra-ui/react";
import { textStyles } from "./themeStyles/textStyles";
import { semanticTokens } from "./themeStyles/semanticToken";

export const system = createSystem(defaultConfig, {
    theme: {
        textStyles,
        tokens: {
            fonts: {
                heading: { value: "'Source Serif 4', serif" },
                body: { value: "'Source Sans 3', sans-serif" },
            },
            colors: {
                brand: {
                    50: { value: "#fdf6e3" },
                    100: { value: "#eee8d5" },
                    200: { value: "#93a1a1" },
                    300: { value: "#839496" },
                    400: { value: "#657b83" },
                    500: { value: "#586e75" },
                    600: { value: "#073642" },
                    700: { value: "#002b36" },
                    800: { value: "#00212b" },
                    900: { value: "#001a22" },
                },
            },
        },
        semanticTokens: semanticTokens,
    },
});