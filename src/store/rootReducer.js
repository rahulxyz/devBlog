import { home } from "../pages/home/partials/reducer";
import { article } from "../pages/article/partials/reducer";

import {auth} from "./reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    auth,
    home,
    article
});

export default rootReducer;