const getReelAndPost = user =>
  `/v1.2/posts?username_or_id_or_url=${user || 'mrbeast'}`;
const getSearch = user =>`/v1/search_users?search_query=${user || ''}`
export default {
  getReelAndPost,
  getSearch
};
