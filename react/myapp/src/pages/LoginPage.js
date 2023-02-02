import { GoogleLoginButton } from "../components/GoogleLoginButton";
import { Hero } from "../components/Hero";
import { LoginButton } from "../components/LoginButton";
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
        <LoginButton />
        <GoogleLoginButton />
       <LoginFormFooter />
      </div>
    </div>
  );
}