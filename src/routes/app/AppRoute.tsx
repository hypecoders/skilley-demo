import { Navigate } from "react-router-dom";

import AppContent from "../../components/app/AppContent";
import useLoggedInUser from "../../hooks/useLoggedInUser";

type Props = {
  child: JSX.Element | JSX.Element[];
};

const AppRoute = ({ child }: Props) => {
  const isUser =
    useLoggedInUser() !== undefined || localStorage.getItem("u") !== null;

  if (!isUser) {
    return <Navigate to="/" />;
  }

  return <AppContent>{child}</AppContent>;
};

export default AppRoute;
