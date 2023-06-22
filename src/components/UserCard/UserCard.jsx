import { useContext } from "react";
import { StyledDiv } from "./style";
import { UserContext } from "../../providers/UserContext";

export const UserCard = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledDiv>
      <h2 className="title">olá,{user.name}</h2>
      <h3 className="course">{user.course_module}</h3>
    </StyledDiv>
  );
};
