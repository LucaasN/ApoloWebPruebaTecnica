import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export const Provider = ({ children }) => {
  const initialValueLogin = localStorage.getItem("isLogged") === "true";
  const [isLogged, setIsLogged] = useState(initialValueLogin);

  const initialValueMasters = JSON.parse(localStorage.getItem("masters")) || [];
  const [masters, setMasters] = useState(initialValueMasters);

  const navigate = useNavigate();

  const login = () => {
    setIsLogged(true);
    navigate("/");
  };

  const logout = () => {
    setIsLogged(false);
    navigate("/");
  };

  const addMaster = (master) => {
    setMasters([...masters, master]);
  };

  const deleteMaster = (id) => {
    setMasters(masters.filter((master) => master.id !== id));
  };

  const getMaster = (id) => {
    return masters.find((master) => +master.id === +id);
  };

  const updateMaster = (id, updatedMaster) => {
    setMasters((prevMasters) =>
      prevMasters.map((master) =>
        +master.id === +id ? { ...master, ...updatedMaster } : master
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("isLogged", isLogged);
  }, [isLogged]);

  useEffect(() => {
    localStorage.setItem("masters", JSON.stringify(masters));
  }, [masters]);

  return (
    <Context.Provider
      value={{
        isLogged,
        login,
        logout,
        masters,
        addMaster,
        deleteMaster,
        getMaster,
        updateMaster,
      }}
    >
      {children}
    </Context.Provider>
  );
};
