import { GlobalStyle } from "./Styles/GlobalStyle";
import { ResetStyle } from "./Styles/reset";
import { HomePage } from "./pages/HomePage";
import { RoutesMain } from "./routes/RoutesMain";

export const App= () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <ResetStyle/>
      <RoutesMain />
    </div>
  );
}

