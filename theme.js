import { extendTheme } from "native-base";

const theme = extendTheme({
    colors: {
        primary: '#4C9FC1',
        secondary: {
            100: '#464646',
            200: '#B4B4B4',
            300: '#F9F9FB',
            400: '#FFFFFF'
        },
    },
    components: {
        Button: {
            variants: {
                rounded: ({
                    colorScheme
                }) => {
                    return {
                        colors: '#F9F9FB',
                        bg: `${colorScheme}`,
                        rounded: "10"
                    };
                }
            },
            sizes: {
                _custom: {
                    px: '12',
                    py: '3'
                }

            }
        }
    }
});

export default theme;

