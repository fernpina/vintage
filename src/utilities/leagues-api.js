import sendRequest from './send-request';
const BASE_URL = '/api/leagues';

export async function index() {
  return await sendRequest(BASE_URL);
}

export async function create(leagueData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', leagueData);
}

export async function deleteLeague(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function createReview(reviewData, league) {
  return sendRequest(`${BASE_URL}/${league._id}/reviews`, 'POST', reviewData);
}