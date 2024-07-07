const getReelAndPost = (user?: string) =>
  `/v1.2/posts?username_or_id_or_url=${user || 'mrbeast'}`;
const getSearch = (user: string) => `/v1/search_users?search_query=${user || ''}`
const getDetail = (user: string) => `/v1/info?username_or_id_or_url=${user || ''}`
export default {
  getReelAndPost,
  getSearch,
  getDetail
};
