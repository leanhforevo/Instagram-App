const getReelAndPost = user =>
  `/v1.2/posts?username_or_id_or_url=${user || 'mrbeast'}`;

export default {
  getReelAndPost,
};
