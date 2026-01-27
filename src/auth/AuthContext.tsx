import { createContext, useContext, useState } from "react";

type Admin = {
  email: string;
  role: "admin";
};

type AuthContextType = {
  admin: Admin | null;
  login: (admin: Admin) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [admin, setAdmin] = useState<Admin | null>(
    JSON.parse(localStorage.getItem("loggedAdmin") || "null"),
  );

  const login = (admin: Admin) => {
    setAdmin(admin);
    localStorage.setItem("loggedAdmin", JSON.stringify(admin));
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem("loggedAdmin");
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
