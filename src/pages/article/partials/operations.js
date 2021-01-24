import { onGet } from '../../../service/network/network';

const endpoints= {
    articleById: (id)=>`/feed/newsFeed/${id}`
}

export function getArticleById(id){
    return onGet(endpoints.articleById(id), undefined, false);
}

export default {
    getArticleById
}