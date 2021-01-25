
import { onGet, onPost } from '../../../service/network/network';

const endpoints = {
    newsFeed: "feed/newsFeed",
    addBlog: "feed/createArticle"
}

export function getBlogList(){
    return onGet(endpoints.newsFeed, undefined, false);
} 

export function addBlog(body){
    return onPost(endpoints.addBlog, body, undefined, true);
} 

export default {
    getBlogList,
    addBlog
}