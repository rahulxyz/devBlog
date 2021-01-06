import { home } from "../pages/home/partials/reducer";
import {auth} from "./reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    auth,
    home
});

export default rootReducer;