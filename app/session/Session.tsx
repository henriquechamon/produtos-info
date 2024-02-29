import fs from "fs";

const SESSION_FILE_PATH = "./app/session/session.json";

function isUserLoggedIn() {
  return fs.existsSync(SESSION_FILE_PATH);
}

function createSession(email: string, id: number) {
  try {
    const sessionData = { email, id };
    fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(sessionData));
    console.log("Sessão criada com sucesso:", sessionData);
  } catch (error) {
    console.error("Erro ao criar sessão:", error);
  }
}

function destroySession() {
  try {
    if (isUserLoggedIn()) {
      fs.unlinkSync(SESSION_FILE_PATH);
      console.log("Sessão destruída com sucesso");
    }
  } catch (error) {
    console.error("Erro ao destruir sessão:", error);
  }
}

function getSessionData() {
  try {
    if (isUserLoggedIn()) {
      const sessionData = fs.readFileSync(SESSION_FILE_PATH, "utf8");
      return JSON.parse(sessionData);
    }
    return null;
  } catch (error) {
    console.error("Erro ao obter dados da sessão:", error);
    return null;
  }
}

export { isUserLoggedIn, createSession, destroySession, getSessionData };
