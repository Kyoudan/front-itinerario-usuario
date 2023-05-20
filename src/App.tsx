import "./styles/global.css";
import { RoutesComponent } from "./routes/routes";
import { AppThemeProvider } from "./contexts/ThemeContext";
import { ScreenLoadingProvider } from "./contexts/ScreenLoadingContext/ScreenLoadingContext";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    Claro: true;
  }
}

function App() {
  return (
    <AppThemeProvider>
      <ScreenLoadingProvider>
        <RoutesComponent />
      </ScreenLoadingProvider>
    </AppThemeProvider>
  );
}

export default App;
