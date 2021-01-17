
import { onGet } from '../../../service/network/network';

const endpoints = {
    newsFeed: "feed/newsFeed",

}

export function getBlogList(){
    return onGet(endpoints.newsFeed, undefined, false);
} 

export default {
    getBlogList
}