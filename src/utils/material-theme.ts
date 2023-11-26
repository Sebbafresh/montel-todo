import { createTheme } from "@mui/material";

// Create a custom theme for the material components
export const createMaterialTheme = () => {
    const theme = createTheme({
        components: {
            MuiInput: {
                styleOverrides: {
                    underline: {
                        '&:before': {
                            borderBottomColor: 'rgba(255, 255, 255, 0.87)', 
                        },
                        '&:hover:not(.Mui-disabled):before': {
                            borderBottomColor: 'rgba(255, 255, 255, 0.87)',  
                        },
                        '&.Mui-focused:after': {
                            borderBottomColor: 'rgba(255, 255, 255, 0.87)',  
                        },
                        '&.Mui-error:after': {
                            borderBottomColor: 'rgba(255, 255, 255, 0.87)',  
                        },
                    },
                },
            },
            MuiSelect: {
                styleOverrides: {
                    icon: {
                        color: 'rgba(255, 255, 255, 0.87)', 
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: 'rgba(255, 255, 255, 0.87)', 
                        '&.Mui-focused': {
                            color: 'rgba(255, 255, 255, 0.87)', 
                        },
                        '&.Mui-error': {
                            color: 'rgba(255, 255, 255, 0.87)', 
                        },
                    },
                },
            },
        },
    });
    return theme;
}
