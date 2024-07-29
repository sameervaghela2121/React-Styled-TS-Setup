import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import "./App.css";

function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello World</h1>
        <span>{t("welcome")}</span>
      </div>
    </ThemeProvider>
  );
}

export default App;
