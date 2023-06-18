import { Header } from "../../components/Header";
import { UserCard } from "../../components/UserCard/UserCard";
import { StyledDiv } from "./style";

export const HomePage = ({ userList }) => {
  return (
    <StyledDiv>
      <Header />
      <section>
        {userList.map((user) => (
          <UserCard key={user.id} user={userList.user} />
        ))}
      </section>
      <div>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <h4>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </h4>
      </div>
    </StyledDiv>
  );
};
