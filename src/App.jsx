import { GlobalStyle } from "./Styles/GlobalStyle";
import { ResetStyle } from "./Styles/reset";
import { RoutesMain } from "./routes/RoutesMain";
import { UserProvider } from "./providers/UserContext";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ResetStyle />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </div>
  );
};
