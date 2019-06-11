import { combineReducers } from "redux";

import { fazer } from "./Fazer/reducer";
import { feito } from "./Feito/reducer";

export default () =>
  combineReducers({
    fazer,
    feito
  });
