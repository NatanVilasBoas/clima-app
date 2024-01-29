import { ThemeProvider } from "styled-components"

const theme = {
    sunny: "linear-gradient(0deg, rgba(255,152,67,1) 0%, rgba(255,221,149,1) 100%)",
    mostlySunny: "linear-gradient(0deg, rgba(255,169,98,1) 0%, rgba(255,226,164,1) 100%)",
    partlySunny: "linear-gradient(0deg, rgba(241,172,114,1) 0%, rgba(246,221,167,1) 100%)",
    intermClouds: "linear-gradient(0deg, rgba(255,179,115,1) 0%, rgba(205,246,255,1) 100%)",
    hazySunshine: "linear-gradient(0deg, rgba(255,194,143,1) 0%, rgba(154,206,218,1) 100%)",
    
}

const Tema = (children) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Tema;