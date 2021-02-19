import http from "./httpService";
import { apiUrl } from "../config.json";

export function createCard(card) {
  return http.post(`${apiUrl}/cards`, card);
}

export function getMyCards() {
  return http.get(`${apiUrl}/cards/my-cards`);
}

export function getCard(id) {
  try {
    return http.get(`${apiUrl}/cards/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export function deleteCard(id) {
  try {
    return http.delete(`${apiUrl}/cards/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export function editCard(card) {
  const { _id, ...data } = card;
  return http.put(`${apiUrl}/cards/${_id}`, data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { createCard, getMyCards, getCard, editCard, deleteCard };
