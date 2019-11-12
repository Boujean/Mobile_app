import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';
import GammesClickReducer from './GammesClickReducer';

export default combineReducers({
  accords: SelectionReducer,
  selectedAccord: SelectionReducer,
  selectedGamme: GammesClickReducer
});
