import DivInput from "../../elements/DivInput"
import { useState } from "react";
import { setBearer } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: usernameValue,
        password: passwordValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setError("");
          dispatch(setBearer(data.body.token));
          navigate("/user");
        } else {
          setError("Identifiant ou mot de passe invalide");
        }
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });

  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <DivInput classUsed="input-wrapper" forLabel="username" label="Username" type="text" onChange={(e) => setUsernameValue(e.target.value)} value={usernameValue} required />
        <DivInput classUsed="input-wrapper" forLabel="password" label="Password" type="password" onChange={(e) => setPasswordValue(e.target.value)} value={passwordValue} required />
        <DivInput classUsed="input-remember" forLabel="remember-me" label="Remember me" type="checkbox" />
        <button className="sign-in-button" type="submit">Sign In</button>
      </form>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </section>
  )
}

export default Signin