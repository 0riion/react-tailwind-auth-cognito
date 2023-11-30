import { Navigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuth";

export default function AuthGuard({ children }) {
  const { isAuthenticated } = useAuthUser();
  if (!isAuthenticated) return <Navigate to='/sign-in' />
  return <>{children}</>
};
