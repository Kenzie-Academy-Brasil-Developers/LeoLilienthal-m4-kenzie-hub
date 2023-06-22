import { StyledHeader } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  const { logOut } = useContext(UserContext);

  return (
    <StyledHeader>
      <h2>Kenzie Hub</h2>
      <button onClick={logOut}>Sair</button>
    </StyledHeader>
  );
};
