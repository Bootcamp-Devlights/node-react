import { Hero } from "../components/Hero";
import { LoginForm } from "../components/LoginForm";
import { LoginFormFooter } from "../components/LoginFormFooter";
import { LoginFormHeader } from "../components/LoginFormHeader";
import "./LoginPage.css"

export function LoginPage() {
  return (
    <div className="LoginPageContainer">
      <div className="LoginHeroContainer">
        <Hero />
      </div>
      <div className="LoginFormContainer">
        <LoginFormHeader />
        <LoginForm />
       <LoginFormFooter />
      </div>
    </div>
  );
}