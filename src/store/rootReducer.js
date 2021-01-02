import { home } from "../pages/home/partials/reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    home
});

export default rootReducer;