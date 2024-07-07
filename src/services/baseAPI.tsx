

import remotes from './remotes';
import url from './urls';
const getReelAndPost = async ({ user, pageToken }: any) => {
    let api = url.getReelAndPost(user);
    if (pageToken) api += `&pagination_token=${pageToken}`;

    return remotes.get(api).catch(() => null)
}

const getSearch = async ({ user }: any) => {
    let api = url.getSearch(user);
    return remotes.get(api).catch(() => null)
}
const getDetailUser = async (user) => {
    let api = url.getDetail(user);
    return remotes.get(api).catch(() => null)
}

export default {
    getReelAndPost,
    getSearch,
    getDetailUser
}