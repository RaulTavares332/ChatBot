import React, { useState, useEffect } from "react";
import { signUp, signIn, logOut } from "../services/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { addUser, listUsers } from "../services/firestore";

interface UserData {
  id: string;
  name: string;
  email: string;
  createdAt?: any;
}

export function AuthExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<string | null>(null);
  const [usersList, setUsersList] = useState<UserData[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user.email);
      else setUser(null);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      const users = await listUsers();
      setUsersList(users);
    }
    fetchUsers();
  }, []);

  const handleSignUp = async () => {
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      const userCredential = await signUp(trimmedEmail, trimmedPassword);
      setUser(userCredential.user.email);

      await addUser(trimmedEmail.split("@")[0], trimmedEmail);
      alert("Usuário cadastrado!");

      const updatedUsers = await listUsers();
      setUsersList(updatedUsers);
    } catch (error) {
      alert("Erro ao cadastrar: " + (error as Error).message);
    }
  };

  const handleSignIn = async () => {
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      const userCredential = await signIn(trimmedEmail, trimmedPassword);
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
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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

      <div style={{ marginTop: "2rem" }}>
        <h3>Usuários cadastrados no Firestore:</h3>
        {usersList.length === 0 ? (
          <p>Nenhum usuário encontrado.</p>
        ) : (
          <ul>
            {usersList.map((u) => (
              <li key={u.id}>
                {u.name} ({u.email})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
