import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("KENZIEHUB@TOKEN");
    const loadUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(currentPath);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("KENZIEHUB@TOKEN");
        localStorage.removeItem("KENZIEHUB@ID");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      loadUser();
    }
  }, []);

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
    <UserContext.Provider value={{ user, loginUser, createUser, logOut, loading }}>
      {children}
    </UserContext.Provider>
  );
};
