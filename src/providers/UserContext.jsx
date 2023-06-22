import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const loginUser = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("KENZIEHUB@TOKEN", data.token);
      localStorage.setItem("KENZIEHUB@ID", data.user.id);
      setUser(data.user);
      navigate("/HomePage");
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("KENZIEHUB@TOKEN");
    localStorage.removeItem("KENZIEHUB@ID");
    setUser(null);
    navigate("/");
  };
  const createUser = async (formData) => {
    try {
      const body = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
      };
      await api.post("/users", body);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, loginUser, createUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
