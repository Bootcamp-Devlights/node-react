import { useState } from "react"
import { GoogleLoginButton } from "./GoogleLoginButton";
import { LoginButton } from "./LoginButton";
import "./LoginForm.css";

export function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function onEmailChange(event) {
    setEmail(event.target.value)
  }

  function onPasswordChange(event) {
    setPassword(event.target.value)
  }

  function onFormSubmit(event) {
    event.preventDefault();

    console.log("email", email)
    console.log("password", password)
  }

  return (
    <form className="LoginForm">
      <label>Email</label>
      <input type="email" name="email" onChange={onEmailChange} />
      <label>Password</label>
      <input type="password" name="password" onChange={onPasswordChange} />
      <div className="LoginFormBottom">
        <div className="RememberContainer">
          <input type="checkbox" name="remember" />
          <label>Remember me</label>
        </div>
        <a href="/#">Forgot Password?</a>
      </div>
      <LoginButton onLoginClick={onFormSubmit} />
      <GoogleLoginButton />
      <div>
        Usuario: {email}
        <br />
        Password: {password}
      </div>
    </form>
  );
}
