import { home } from "../pages/home/partials/reducer";
import { article } from "../pages/article/partials/reducer";

import {auth} from "./reducer";
import { loader } from '../components/loader/partials/reducer';

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    auth,
    home,
    article,
    loader
});

export default rootReducer;