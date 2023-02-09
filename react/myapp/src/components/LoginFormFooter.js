import { Link } from "react-router-dom"

export function LoginFormFooter() {
  return (
    <div style={{ marginTop: 60 }}>
      <p>
        Don't have an account? <Link to="/register">Join free today</Link>
      </p>
    </div>
  );
}
