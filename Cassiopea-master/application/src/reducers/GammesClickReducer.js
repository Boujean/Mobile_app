import { GAMME_CHANGED } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case GAMME_CHANGED:
      console.log('gamme changed');
      return { ...state, gamme: action.payload };

    default:
      return state;
  }
}
