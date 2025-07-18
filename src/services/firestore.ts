import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function addUser(name: string, email: string) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      email,
      createdAt: new Date(),
    });
    console.log("Usuário adicionado com ID:", docRef.id);
  } catch (e) {
    console.error("Erro ao adicionar usuário:", e);
  }
}

export async function listUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
