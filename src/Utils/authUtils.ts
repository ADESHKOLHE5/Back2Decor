export const getUserRole = (): string | null => {
  return sessionStorage.getItem("userRole");
};

export const setUserRole = (role: string): void => {
  sessionStorage.setItem("userRole", role);
};

export const clearUserRole = (): void => {
  sessionStorage.removeItem("userRole");
};
