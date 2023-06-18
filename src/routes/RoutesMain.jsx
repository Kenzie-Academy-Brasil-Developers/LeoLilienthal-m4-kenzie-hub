import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { useEffect, useState } from "react"
import { api } from "../services/api"

export const RoutesMain = ()=>{
    const [userList, setUserList] = useState([]);

    useEffect(() =>{
        const loadUsers = async () =>{
            try {
                const token = localStorage.getItem("KENZIEHUB@TOKEN")
                console.log(token)
                const {data} = await api.get('/profile',token)
                console.log(data)
                setUserList(data)
            } catch (error) {
                console.log(error)
            }
        }
        loadUsers()
    },[])

    return(
        <Routes>
            <Route path="/" element={<HomePage userList={userList}/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register setUserList={setUserList}/>}/>
        </Routes>
        
    )
}