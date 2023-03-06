import axios from 'axios';
import { getUserData } from './userData';

const FIREBASE_API_KEY = 'AIzaSyBXqr9KQ7P0c4NBf3DfoqcfBGADmhbo2yY';

const SIGN_UP_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

/**
 *
 * @param email - user email input
 * @param password - user password input
 * @returns object with keys: email, firstName, lastName, jobTitle (strings)
 */
export async function logInAsync(email: string, password: string) {
  const url = SIGN_UP_URL + FIREBASE_API_KEY;
  const x = await axios
    .post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    })
    .then(async (res) => {
      const userInfo = await getUserData(res.data.localId);
      return { ...userInfo.data, email: res.data.email };
    })
    .catch((e) => {
      throw new Error(e.response.status);
    });
  return x;
}
