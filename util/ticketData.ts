import axios from 'axios';

const BACKEND_URL = 'https://itcarddata-default-rtdb.europe-west1.firebasedatabase.app/';

export async function postTicketData(data) {
	const preparedData = JSON.stringify(data);
	const response = await axios.post(BACKEND_URL + 'tickets.json', preparedData);
	return response;
}
