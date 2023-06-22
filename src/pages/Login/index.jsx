import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { StyledDiv } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./LoginSchema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const { loginUser } = useContext(UserContext);

  const submit = (formData) => {
    loginUser(formData);
    reset();
  };

  return (
    <StyledDiv>
      <h1>Kenzie Hub</h1>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
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
        <button type="submit">Entrar</button>
        <h4>Ainda não possui conta?</h4>
        <Link to="/Register" className="styledLink">
          Cadastre-se
        </Link>
      </form>
    </StyledDiv>
  );
};
