import sendRequest from "./send-request";
const BASE_URL = '/api/jerseys';

export async function index() {
  return await sendRequest(BASE_URL);
}

export async function create(jerseyData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', jerseyData);
}

export async function deleteJersey(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function createComment(commentData, jersey) {
  return sendRequest(`${BASE_URL}/${jersey._id}/comments`, 'POST', commentData);
}