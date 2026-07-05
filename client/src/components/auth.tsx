import { useEffect } from "react";
import { useNavigate } from "react-router";
function Auth() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return <></>;
}

export default Auth;
