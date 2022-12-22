import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export async function index(jersey) {
  return await sendRequest(`/api/jerseys/${jersey._id}`);
}

export async function createComment(commentData, jersey) {
  return sendRequest(`${BASE_URL}/${jersey._id}/new`, 'POST', commentData);
}

export async function updateComment(commentFormData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', commentFormData);
}

export async function deleteComment(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}