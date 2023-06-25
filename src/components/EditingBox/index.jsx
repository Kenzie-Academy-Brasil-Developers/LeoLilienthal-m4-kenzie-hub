import { useForm } from "react-hook-form";
import { StyledDiv, StyledForm } from "./style";
import { useContext } from "react";
import { TechsContext } from "../../providers/TechsContext";

export const EditingBox = ({ children, dellCallback, falseCallback }) => {
  const { register, handleSubmit } = useForm();
  const { createTech } = useContext(TechsContext);

  const submit = (formData) => {
    const data = { ...formData };
    createTech(data);
  };
  return (
    <StyledDiv>
      <div className="modalOverlay" role="dialog">
        <div className="modalBox">
          <div className="modalHeader">
            <p>Detalhes da Tecnologia</p>
            <button onClick={falseCallback}>X</button>
          </div>
          <StyledForm onSubmit={handleSubmit(submit)}>
            <div className="inputContainer">
              <h3>nome</h3>
              <input
                {...register("title")}
                placeholder={children.props.children[1]}
              />
            </div>
            <div className="inputSelect">
              <h3>Status</h3>
              <select placeholder="Iniciante" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
            <div className="formBtns">
              <button className="saveBtn" type="submit" onClick={dellCallback}>
                Salvar alterações
              </button>
              <button className="delBtn" onClick={dellCallback}>
                Excluir
              </button>
            </div>
          </StyledForm>
        </div>
      </div>
    </StyledDiv>
  );
};
