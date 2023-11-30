import { Navigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuth";

export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAuthUser();
  if (isAuthenticated) return <Navigate to='/' />
  return <>{children}</>
};
