import "./styles/global.css";
import { RoutesComponent } from "./routes/routes";
import { AppThemeProvider } from "./contexts/ThemeContext";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    Claro: true;
  }
}

function App() {
  return (
    <AppThemeProvider>
      <RoutesComponent />
    </AppThemeProvider>
  );
}

export default App;
