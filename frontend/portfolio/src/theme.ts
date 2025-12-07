import { createSystem, defaultConfig } from "@chakra-ui/react";
import { textStyles } from "./themeStyles/textStyles";
import { semanticTokens } from "./themeStyles/semanticToken";

export const system = createSystem(defaultConfig, {
    theme: {
        textStyles,
        tokens: {
            fonts: {
                heading: { value: "'Space Grotesk', sans-serif" },
                body: { value: "'Inter', sans-serif" },
            },
            colors: {
                brand: {
                    50: { value: "#eef2ff" },
                    100: { value: "#e0e7ff" },
                    200: { value: "#c7d2fe" },
                    300: { value: "#a5b4fc" },
                    400: { value: "#818cf8" },
                    500: { value: "#6366f1" },
                    600: { value: "#4f46e5" },
                    700: { value: "#4338ca" },
                    800: { value: "#3730a3" },
                    900: { value: "#312e81" },
                },
            },
        },
        semanticTokens: semanticTokens,
    },
});