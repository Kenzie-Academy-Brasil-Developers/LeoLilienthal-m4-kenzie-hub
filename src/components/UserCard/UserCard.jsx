import { StyledDiv } from "./style"

export const UserCard = ({user}) =>{
    return(
        <StyledDiv>
            {user.name}
            <h2>olá,Samuel leão</h2>
            <h3>Primeiro módulo (Introdução ao Frontend)</h3>
        </StyledDiv>
    )
} 