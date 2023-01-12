import axios from 'axios';

const BACKEND_URL = 'https://itcarddata-default-rtdb.europe-west1.firebasedatabase.app/';

export async function getUserData(localId: string) {
	const response = await axios.get(BACKEND_URL + 'userdata/' + localId + '.json');
	return response;
}
