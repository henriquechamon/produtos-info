import NavBar from "@/components/NavBar";
import { getSessionData } from "../session/Session";
import { PrismaClient } from "@prisma/client";

export default async function Dashboard() {
  const sessionData = getSessionData();
  const client = new PrismaClient();

  try {
    const account = await client.account.findUnique({
      where: {
        email: sessionData?.session.email,
      },
    });

    if (!account) {
      return (
        <>
          <NavBar title="Painel do usuário"></NavBar>
          <p>Conta não encontrada</p>
        </>
      );
    }

    return (
      <>
        <NavBar title="Painel do usuário"></NavBar>
        <h1>Olá {account.name}</h1>{" "}
      </>
    );
  } catch (error) {
    console.error("Erro ao buscar a conta:", error);
    return (
      <>
        <NavBar title="Painel do usuário"></NavBar>
        <p>Ocorreu um erro ao buscar a conta</p>
      </>
    );
  } finally {
    await client.$disconnect();
  }
}
