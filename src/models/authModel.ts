interface Session {
	id: string,
	user: number,
	expiration: number,
}

interface Token {
	token: string,
}

export { Session, Token };
