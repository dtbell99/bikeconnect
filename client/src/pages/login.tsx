import { useState } from "react";
import { post } from "../util/http";
import { useNavigate } from "react-router";

function Login() {
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
    <div className="card-container" style={{ marginBlockStart: "2rem" }}>
      <h1 className="text-center" style={{ marginBlockEnd: "0.5rem" }}>
        Login
      </h1>
      <p className="text-center" style={{ marginBlockEnd: "2rem" }}>
        Enter your email to access your BikeConnect portal.
      </p>

      {alert && (
        <div className="alert-box alert-error" role="alert">
          <span style={{ fontSize: "1.2rem" }}>⚠️</span>
          <span>{alert}</span>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="email-input" className="label-text">
          Email Address
        </label>
        <input
          id="email-input"
          className="input-text"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@domain.com"
          required
        />
      </div>

      <button
        className="btn btn-primary"
        style={{ inlineSize: "100%", marginBlockStart: "0.5rem" }}
        onClick={sendLogin}
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;
