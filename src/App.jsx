import { useContext } from "react";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { ResetStyle } from "./Styles/reset";
import { RoutesMain } from "./routes/RoutesMain";
import { UserContext } from "./providers/UserContext";

export const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <div className="App">
      <GlobalStyle />
      <ResetStyle />
      {loading ? <h1>Carregando</h1> : <RoutesMain />}
    </div>
  );
};
