import { User } from './userModel';
import { Session } from './authModel';

interface Data {
	users: User[],
	sessions: Session[],
}

export { Data };
