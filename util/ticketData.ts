import axios from 'axios';
import { TicketDataType } from '../hooks/asyncStorage';

const BACKEND_URL = 'https://itcarddata-default-rtdb.europe-west1.firebasedatabase.app/';

export interface PostTicketDataType extends TicketDataType {
	email: string | null;
	firstName: string | null;
	lastName: string | null;
	jobTitle: string | null;
}

export async function postTicketData(data: PostTicketDataType) {
	const preparedData = JSON.stringify(data);
	const response = await axios.post(BACKEND_URL + 'tickets.json', preparedData);
	return response;
}
