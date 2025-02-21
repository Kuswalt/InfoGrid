import { jwtDecode } from 'jwt-decode';

interface TokeId {
	user_id: number;
}

export default function decode(token: string) {
	try {
		const decodedToken = jwtDecode<TokeId>(token);
		return decodedToken;
	} catch (error) {
		console.error('Invalid token:', error);
		return null;
	}
}
