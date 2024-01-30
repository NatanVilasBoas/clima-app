import { ThemeProvider } from "styled-components"

const theme = {
    hot: "linear-gradient(0deg, rgba(255,152,67,1) 0%, rgba(255,221,149,1) 100%)",
    warm: "linear-gradient(0deg, rgba(255,248,214,1) 0%, rgba(154,211,224,1) 100%)",
    cold: "linear-gradient(0deg, rgba(169,201,201,1) 0%, rgba(154,211,224,1) 100%)"
}

const Tema = ({children}) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Tema;