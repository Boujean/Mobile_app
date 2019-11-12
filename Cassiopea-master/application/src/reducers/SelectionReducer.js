import { NOTE_CHANGED, TYPEACCORD_CHANGED, SELECT_ACCORD } from '../actions/types';

const INITIAL_STATE = { note: 'Do', typeAccord: 'accordMajeur' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_ACCORD:
      return action.payload;

    case NOTE_CHANGED:
      console.log('note changed');
      return { ...state, note: action.payload };

    case TYPEACCORD_CHANGED:
      console.log('typeAccord changed');
      return { ...state, typeAccord: action.payload };

    default:
      return state;
  }
};
