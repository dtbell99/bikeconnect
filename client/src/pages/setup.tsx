import { useState } from "react";
import { Link } from "react-router";
import { post } from "../util/http";

function Setup() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [alert, setAlert] = useState<string>("");
  const [display, setDisplay] = useState<string>("setup");

  async function create() {
    setAlert("");
    if (!firstName || !lastName || !city || !state || !postalCode) {
      setAlert("Please fill in all fields below");
      return;
    }
    const body = {
      firstName,
      lastName,
      city,
      state,
      postalCode,
    };

    const { status } = await post("/api/setup", JSON.stringify(body));

    if (status === 200) {
      setDisplay("success");
    } else {
      setAlert("An error has occurred please try again later");
    }
  }

  return (
    <div className="card-container" style={{ marginBlockStart: "2rem", maxInlineSize: "550px" }}>
      <h1 className="text-center" style={{ marginBlockEnd: "0.5rem" }}>
        Setup your account
      </h1>
      <p className="text-center" style={{ marginBlockEnd: "2rem" }}>
        Fill out your profile details to join BikeConnect.
      </p>

      {alert && (
        <div className="alert-box alert-error" role="alert">
          <span style={{ fontSize: "1.2rem" }}>⚠️</span>
          <span>{alert}</span>
        </div>
      )}

      {display === "success" && (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="alert-box alert-success" role="alert" style={{ textAlign: "left" }}>
            <span style={{ fontSize: "1.2rem" }}>✅</span>
            <span>Thank you for signing up for BikeConnect!</span>
          </div>
          <h3>Please verify your email address to continue.</h3>
          <Link to="/login" className="btn btn-primary" style={{ inlineSize: "100%" }}>
            Go to Login
          </Link>
        </div>
      )}

      {display === "setup" && (
        <>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name-input" className="label-text">
                First Name
              </label>
              <input
                id="first-name-input"
                className="input-text"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name-input" className="label-text">
                Last Name
              </label>
              <input
                id="last-name-input"
                className="input-text"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city-input" className="label-text">
                City
              </label>
              <input
                id="city-input"
                className="input-text"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state-input" className="label-text">
                State
              </label>
              <input
                id="state-input"
                className="input-text"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="postal-code-input" className="label-text">
              Postal Code
            </label>
            <input
              id="postal-code-input"
              className="input-text"
              type="number"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </div>

          <button
            className="btn btn-primary"
            style={{ inlineSize: "100%", marginBlockStart: "1rem" }}
            onClick={create}
          >
            Create Account
          </button>
        </>
      )}
    </div>
  );
}

export default Setup;
