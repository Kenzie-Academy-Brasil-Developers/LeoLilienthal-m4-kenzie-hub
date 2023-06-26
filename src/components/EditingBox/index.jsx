import { useForm } from "react-hook-form";
import { StyledDiv, StyledForm } from "./style";
import { useContext } from "react";
import { TechsContext } from "../../providers/TechsContext";

export const EditingBox = ({ children, setIsEditing, tech }) => {
  const { register, handleSubmit } = useForm();
  const { deleteTech, editTech } = useContext(TechsContext);

  const submit = (formData) => {
    const data = { ...formData };
    editTech(tech.id, data);
    setIsEditing(false)
  };
  
  return (
    <StyledDiv>
      <div className="modalOverlay" role="dialog">
        <div className="modalBox">
          <div className="modalHeader">
            <p>Detalhes da Tecnologia</p>
            <button onClick={()=>setIsEditing(false)}>X</button>
          </div>
          <StyledForm onSubmit={handleSubmit(submit)}>
            <div className="inputContainer">
              <h3>nome</h3>
              <input
                readOnly
                value={tech.title}
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
              <button className="saveBtn" type="submit" >
                Salvar alterações
              </button>
              <button className="delBtn" onClick={() =>deleteTech(tech.id)}>
                Excluir
              </button>
            </div>
          </StyledForm>
        </div>
      </div>
    </StyledDiv>
  );
};
