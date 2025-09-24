import { useState } from "react";
import { useAuthStore } from "../../modules/Auth/viewModel/auth.store";

export default function LoginPage() {
  const { login, isLoading, error, user } = useAuthStore();
  const [session, setSession] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(session, password);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && <p>Bienvenue {user.session}</p>}
      <form onSubmit={handleSubmit}>
        <input value={session} onChange={(e) => setSession(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
        <button type="submit" disabled={isLoading}>Se connecter</button>
      </form>
    </div>
  );
}
