import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type UserRole = 'admin' | 'user' | null;

interface AuthContextType {
  role: UserRole;
  isAuthenticated: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
  hasRole: (requiredRole: UserRole | UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load role from sessionStorage on mount
  useEffect(() => {
    const storedRole = sessionStorage.getItem('userRole') as UserRole;
    if (storedRole) {
      setRole(storedRole);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (newRole: UserRole) => {
    setRole(newRole);
    setIsAuthenticated(true);
    if (newRole) {
      sessionStorage.setItem('userRole', newRole);
    }
  };

  const logout = () => {
    setRole(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem('userRole');
  };

  const hasRole = (requiredRole: UserRole | UserRole[]): boolean => {
    if (!isAuthenticated || !role) return false;
    if (Array.isArray(requiredRole)) {
      return requiredRole.includes(role);
    }
    return role === requiredRole;
  };

  return (
    <AuthContext.Provider value={{ role, isAuthenticated, login, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
