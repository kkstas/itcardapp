import { atmsDummyData } from "../constants/atmsDummyData";

const returnMatchingATMs = (query: string) => {
  if (query.length > 2) {
    // TODO zamienic filter na array.reduce żeby nie iterowało dalej jak już znalazło 5 wyników
    const data = atmsDummyData.filter((atm) =>
      atm.nazwa.toLowerCase().includes(query.toLowerCase())
    );
    const cutData = data.length > 5 ? data.slice(0, 5) : data;
    return cutData;
  }
  return null;
};
export default returnMatchingATMs;
