import "./styles/global.css";
import { RoutesComponent } from "./routes/routes";
import { AppThemeProvider } from "./contexts/ThemeContext";
import { ScreenLoadingProvider } from "./contexts/ScreenLoadingContext/ScreenLoadingContext";
import { ApolloProvider } from "@apollo/client";
import { graphqlClient } from "./api/api";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    Claro: true;
  }
}

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <AppThemeProvider>
        <ScreenLoadingProvider>
          <RoutesComponent />
        </ScreenLoadingProvider>
      </AppThemeProvider>
    </ApolloProvider>
  );
}

export default App;
