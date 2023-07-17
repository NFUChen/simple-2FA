import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { TwoFactorAuth } from "./components/TwoFactorAuth";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TwoFactorAuth />
    </ThemeProvider>
  );
}

export default App;
