import { Hero } from "../../components/Hero";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { LoginFormFooter } from "../../components/LoginFormFooter";
import { FormHeader } from "../../components/FormHeader/FormHeader";
import "./LoginPage.css"

export function LoginPage() {
  return (
    <div className="LoginPageContainer">
      <div className="LoginHeroContainer">
        <Hero />
      </div>
      <div className="LoginFormContainer">
        <FormHeader subtitle="Welcome back" title="Login to your account" />
        <LoginForm />
       <LoginFormFooter />
      </div>
    </div>
  );
}