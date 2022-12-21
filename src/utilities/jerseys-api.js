import sendRequest from "./send-request";
const BASE_URL = '/api/jerseys';

export async function index() {
  return await sendRequest(BASE_URL);
}

export async function create(jerseyData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', jerseyData);
}

export async function updateJersey(jerseyFormData, id) {
    return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', jerseyFormData);
  }

export async function deleteJersey(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

