interface Session {
  id: string,
  user: string,
  expiration: number,
}

interface Token {
  token: string,
}

export { Session, Token };
