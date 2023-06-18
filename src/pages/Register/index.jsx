import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { StyledDiv } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./RegisterSchema";

export const Register = ({ setUserList }) => {
  const { register, handleSubmit,formState:{errors}, reset } = useForm({
    resolver: zodResolver(RegisterSchema)
  });

  const navigate = useNavigate();

  const createUser = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);

      setUserList((userList) => [...userList, data]);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (formData) => {
    createUser(formData);
    reset();
  };

  return (
    <StyledDiv>
      <div className="topTitle">
        <h1>Kenzie Hub</h1>
        <Link to="/Login" className="StyledLink">
          Voltar
        </Link>
      </div>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <h2>Crie sua conta</h2>
        <h4>Rapido e grátis, vamos nessa</h4>
        <div className="inputContainer">
          <h3>Nome</h3>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name?.message}
        </div>
        <div className="inputContainer">
          <h3>Email</h3>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email?.message}
        </div>
        <div className="inputContainer">
          <h3>Senha</h3>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password?.message}
        </div>
        <div className="inputContainer">
          <h3>Confirmar Senha</h3>
          <input type="password" placeholder="Digite novamente sua senha" />
        </div>
        <div className="inputContainer">
          <h3>Bio</h3>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio?.message}
        </div>
        <div className="inputContainer">
          <h3>Contato</h3>
          <input
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact?.message}
        </div>
        <div className="inputSelect">
          <h3>Selecionar módulo</h3>
          <select placeholder="Primeiro Módulo" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>
          {errors.course_module?.message}
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </StyledDiv>
  );
};
