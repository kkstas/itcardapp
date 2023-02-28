import { atmsDummyData } from "../constants/atmsDummyData";

const returnMatchingATMs = (query: string) => {
  if (query.length > 0) {
    // TODO zamienic filter na array.reduce żeby nie iterowało dalej jak już znalazło 5 wyników
    const lowerCaseQuery = query.toLowerCase();
    const firstData = atmsDummyData.filter((atm) => {
      // if (atm.nazwa.toLowerCase().startsWith(lowerCaseQuery)) {
      //   return true;
      // } else
      if (atm.lokalizacja.toLowerCase().startsWith(lowerCaseQuery)) {
        return true;
      } else {
        return false;
      }
    });
    let includesData;
    if (firstData.length < 5) {
      includesData = atmsDummyData.filter((atm) => {
        if (
          atm.nazwa.toLowerCase().includes(lowerCaseQuery) &&
          !firstData.includes(atm)
        ) {
          return true;
        } else if (
          atm.lokalizacja.toLowerCase().includes(lowerCaseQuery) &&
          !firstData.includes(atm)
        ) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      includesData = null;
    }

    const data = includesData ? firstData.concat(includesData) : firstData;

    const cutData = data.length > 5 ? data.slice(0, 5) : data;
    return cutData;
  }
  return null;
};
export default returnMatchingATMs;
