declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET_OR_PUBLICKEY: string;
    }
  }
}

export {};
