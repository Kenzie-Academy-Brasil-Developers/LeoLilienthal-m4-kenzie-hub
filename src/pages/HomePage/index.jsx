import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { UserCard } from "../../components/UserCard/UserCard";
import { StyledDiv } from "./style";
import { UserContext } from "../../providers/UserContext";
import { TechsContext } from "../../providers/TechsContext";
import { CreateTechForm } from "../../components/CreateTechForm";
import { EditingBox } from "../../components/EditingBox";

export const HomePage = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useContext(UserContext);
  const { techsList, deleteTech, editTech } = useContext(TechsContext);
  const [tech, setTech] = useState(null);

  if (!user) {
    return <h1>carregando</h1>;
  }

  return (
    <StyledDiv>
      <Header />
      <section>
        <UserCard />
      </section>
      <div className="createContainer">
        <h2>Tecnologias</h2>
        <button onClick={() => setIsCreateOpen(!isCreateOpen)}>+</button>
      </div>

      <div>
        {isCreateOpen ? (
          <CreateTechForm
            falseCallback={() => setIsCreateOpen(!isCreateOpen)}
          />
        ) : null}
        {isEditing ? (
          <EditingBox setIsEditing = {setIsEditing} tech={tech}>
            <h2> {user.techs[0].title}</h2>
          </EditingBox>
        ) : null}
        <ul className="techList">
          {techsList.map((currentTech) => (
            <li
              className="techName"
              key={currentTech.id}
              onClick={() => {
                setIsEditing(true)
                setTech(currentTech)
              }}
            >
              <h2>{currentTech.title}</h2>
              <h3>{currentTech.status}</h3>
            </li>
          ))}
        </ul>
      </div>
    </StyledDiv>
  );
};
