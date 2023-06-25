import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/TechsContext";
import { StyledDiv, StyledForm } from "./style";

export const CreateTechForm = ({ falseCallback }) => {
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
            <h2>Cadastrar Tecnologia</h2>
            <button onClick={falseCallback}>X</button>
          </div>
          <StyledForm onSubmit={handleSubmit(submit)}>
            <div className="inputContainer">
              <h3>nome</h3>
              <input {...register("title")} />
            </div>
            <div className="inputSelect">
              <h3>Selecionar status</h3>
              <select placeholder="Iniciante" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
            <button className="btn" type="submit">
              Cadastrar tecnologia
            </button>
          </StyledForm>
        </div>
      </div>
    </StyledDiv>
  );
};
