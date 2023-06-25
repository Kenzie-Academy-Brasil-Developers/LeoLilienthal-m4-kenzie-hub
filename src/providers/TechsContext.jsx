import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const [techsList, setTechsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("KENZIEHUB@TOKEN");
    const loadTechData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechsList(data.techs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadTechData();
  }, []);

  const createTech = async (formData) => {
    const token = localStorage.getItem("KENZIEHUB@TOKEN");
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechsList((techsList) => [...techsList, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (currentId) =>{
    const token = localStorage.getItem("KENZIEHUB@TOKEN");
    try {
      await api.delete(`/users/techs/${currentId}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setTechsList((techsList) => techsList.filter(currentTech =>currentTech.id !== currentId))
    } catch (error) {
      console.log(error)
    }
  }

  const editTech = async (currentId, formData) =>{
    await deleteTech(currentId);
    await createTech(formData);
  }

  return (
    <TechsContext.Provider value={{ loading, techsList, createTech, deleteTech, editTech }}>
      {children}
    </TechsContext.Provider>
  );
};
