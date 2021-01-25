import { onGet, onPut } from '../../../service/network/network';

const endpoints= {
    articleById: (id)=>`/feed/newsFeed/${id}`,
    updateBlog: ``,
}

export function getArticleById(id){
    return onGet(endpoints.articleById(id), undefined, false);
}

export function updateBlog(body){
    return onPut(endpoints.updateBlog, body, undefined, true);
} 

export default {
    getArticleById,
    updateBlog
}