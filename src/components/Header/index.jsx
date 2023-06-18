import { Link, useNavigate } from "react-router-dom"
import {StyledHeader} from "./style"

export const Header = () =>{

    const navigate = useNavigate();

    const logOut = () =>{
        
        localStorage.clear()
        navigate("/Login")
    }
    return(
        <>
            <StyledHeader>
                <h2>Kenzie Hub</h2>
                <button onClick={logOut}>Sair</button>
            </StyledHeader>
        </>

    )
}