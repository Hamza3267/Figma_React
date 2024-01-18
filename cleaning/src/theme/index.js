import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import ComponentsOverrides from "./components";
import mainPalette from "./palette";
import typography from "./typography";

const ThemeConfigration = ({ children }) => {
  const applyTheme = () => {
    // simple theme cratation
    let theme = createTheme({
      palette: mainPalette,
    });

    return createTheme(theme, {
      components: ComponentsOverrides(theme),
      typography: typography(theme),
    });

  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={applyTheme()}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfigration;

// by Wrapping this component tothe mainthing it will apply theme to the component
