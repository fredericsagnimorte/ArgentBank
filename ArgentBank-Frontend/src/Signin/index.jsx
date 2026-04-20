import DivInput from "../elements/DivInput"
import { useState } from "react";


function Signin() {
const [usernameValue, setUsernameValue ] = useState("");
const [passwordValue, setPasswordValue] = useState("");

function handleSubmit(e){
    e.preventDefault();

    console.log("usernameValue : ",usernameValue);
    console.log("passwordValue : ",passwordValue);

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
        console.log("Réponse API :", data);
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
                <DivInput classUsed="input-wrapper" forLabel="password" label="Password" type="password" onChange={(e) => setPasswordValue(e.target.value)} value={passwordValue} required/>
                <DivInput classUsed="input-remember" forLabel="remember-me" label="Remember me" type="checkbox" />
                <button className="sign-in-button" type="submit">Sign In</button>
            </form>
        </section>
    )
}

export default Signin