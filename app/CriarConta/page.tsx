import NavBar from "@/components/NavBar";
import style from "./conta.module.css";
import { PrismaClient } from "@prisma/client";
import "../session/Session";
import { createSession } from "../session/Session";
import { redirect } from "next/navigation";
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
export default async function CriarConta() {
  async function Cadastro(data: any) {
    "use server";
    const email = data.get("email");
    const senha = data.get("Senha");
    createSession(email);
    const client = new PrismaClient();
    const Accounts = await client.account.create({
      data: {
        email: email,
        senha: senha,
        id: getRandomInt(9999),
        balance: 10000.0,
        name: email,
      },
    });
    redirect("/Dashboard");
  }
  return (
    <>
      <NavBar title="Criação de conta para prosseguir"></NavBar>
      <div className={style.grid}>
        <form action={Cadastro} className={style.card}>
          <h3 className={style.h3text}>Criando sua conta</h3>
          <input
            className={style.input}
            name="email"
            placeholder="Seu e-mail"
            required
            type="email"
          ></input>
          <input
            className={style.input}
            name="Senha"
            type="password"
            required
            placeholder="Uma senha"
          ></input>
          <button type="submit" className={style.button}>
            Prosseguir
          </button>
        </form>
      </div>
    </>
  );
}
