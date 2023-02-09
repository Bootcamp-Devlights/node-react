import { Hero } from "../../components/Hero";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { FormHeader } from "../../components/FormHeader/FormHeader";
import "./RegisterPage.css";

export function RegisterPage() {
  return (
    <div className="LoginPageContainer">
      <div className="LoginHeroContainer">
        <Hero />
      </div>
      <div className="LoginFormContainer">
        <FormHeader subtitle="Register today" title="Enter your account data" />
        <RegisterForm />
      </div>
    </div>
  );
}
