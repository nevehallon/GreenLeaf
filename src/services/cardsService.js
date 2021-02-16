import http from "./httpService";
import { apiUrl } from "../config.json";

export function createCard(card) {
  return http.post(`${apiUrl}/cards`, card);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { createCard };
