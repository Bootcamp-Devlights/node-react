import { useState } from "react";
import { createUserService } from "../../services/users";
import { useNavigate } from "react-router-dom"
import "./RegisterForm.css";

export function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onLastNameChange(event) {
    setLastName(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onRePasswordChange(event) {
    setRePassword(event.target.value);
  }

  async function onFormSubmit(event) {
    event.preventDefault();

    if (password === rePassword) {

      const user = await createUserService({
        name,
        lastName,
        email,
        password,
        rePassword
      })

      navigate("/login");

      console.log("user created", user);
    } else {
      alert("Los passwords no coinciden")
    }
  }

  return (
    <form className="RegisterForm" onSubmit={onFormSubmit}>
      <label>Name</label>
      <input name="name" onChange={onNameChange} />
      <label>Last name</label>
      <input name="lastName" onChange={onLastNameChange} />
      <label>Email</label>
      <input type="email" name="email" onChange={onEmailChange} />
      <label>Password</label>
      <input type="password" name="password" onChange={onPasswordChange} />
      <label>Re-Password</label>
      <input type="password" name="rePassword" onChange={onRePasswordChange} />
      <button className="Button" type="submit">Register</button>
    </form>
  );
}
