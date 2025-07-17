import React, { useState } from "react";
import { signUp, signIn, logOut } from "./services/auth";

export function AuthExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<string | null>(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await signUp(email, password);
      setUser(userCredential.user.email);
      alert("Usuário cadastrado!");
    } catch (error) {
      alert("Erro ao cadastrar: " + (error as Error).message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signIn(email, password);
      setUser(userCredential.user.email);
      alert("Usuário logado!");
    } catch (error) {
      alert("Erro ao logar: " + (error as Error).message);
    }
  };

  const handleLogout = async () => {
    await logOut();
    setUser(null);
    alert("Usuário deslogado!");
  };

  return (
    <div>
      <h2>Autenticação Firebase</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Cadastrar</button>
      <button onClick={handleSignIn}>Entrar</button>
      {user && (
        <div>
          <p>Logado como: {user}</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      )}
    </div>
  );
}
