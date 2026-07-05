import { useState } from "react";
import { post } from "../util/http";

function Home() {
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
    <>
      <h1>Setup your account</h1>
      {alert && <div>{alert}</div>}
      {display === "success" && (
        <>
          <h2>
            Thank you for signing up for BikeConnect. Please verify your email
            to continue.
          </h2>
        </>
      )}
      {display === "setup" && (
        <>
          <b>First Name</b>
          <br />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />
          <b>Last Name</b>
          <br />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />
          <b>City</b>
          <br />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <br />
          <b>State</b>
          <br />
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <br />
          <br />
          <b>Postal Code</b>
          <br />
          <input
            type="number"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <br />
          <br />
          <button onClick={create}>Create Account</button>
        </>
      )}
    </>
  );
}

export default Home;
