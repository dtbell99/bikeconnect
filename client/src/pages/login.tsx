import { useState } from "react";
import { post } from "../util/http";
import { useNavigate } from "react-router";

function Catalog() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [alert, setAlert] = useState<string>("");

  async function sendLogin() {
    setAlert("");
    if (!email) {
      setAlert("Please enter your email address");
      return;
    }
    const { status, data } = await post("/api/auth", JSON.stringify({ email }));
    if (status === 404) navigate("/setup");
    if (data) {
      console.log(data);
    } else {
      setAlert("Unable to login at this time. Please try again later");
    }
  }

  return (
    <>
      <h1>Login</h1>
      {alert && <div>{alert}</div>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="user@domain.com"
      />
      <button onClick={sendLogin}>Login</button>
    </>
  );
}

export default Catalog;
