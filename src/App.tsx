import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t("home.title")}</h1>
      <p>{t("home.paragraph")}</p>
    </div>
  );
}

export default App;
