

import remotes from './remotes';
import url from './urls';
const getReelAndPost = async ({ user, pageToken }) => {
    let api = url.getReelAndPost(user);
    if (pageToken) api += `&pagination_token=${pageToken}`;

    return remotes.get(api).catch(() => null)
}

const getSearch = async ({ user }) => {
    let api = url.getSearch(user);
console.log("api:",api)
    return remotes.get(api).catch(() => null)
}

export default {
    getReelAndPost,
    getSearch
}