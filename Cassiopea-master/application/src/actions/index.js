import { Actions } from 'react-native-router-flux';
import { NOTE_CHANGED, TYPEACCORD_CHANGED, SELECT_ACCORD, GAMME_CHANGED, POSITION_CLICKED, GAMME_SET_SELECTED } from './types';

export const selectAccord = (note, accordType) => {
  return {
    type: SELECT_ACCORD,
    payload: { note, accordType }
  };
};

export const noteChanged = (note) => {
  return {
    type: NOTE_CHANGED,
    payload: note
  };
};

export const typeAccordChanged = (typeAccord) => {
  return {
    type: TYPEACCORD_CHANGED,
    payload: typeAccord,
  };
};

export const gammesetSelected = (note, typeAccord) => {
  Actions.GammeView({note, typeAccord})
  return {
    type: GAMME_SET_SELECTED,
    payload: note,
    payload: typeAccord,
  };
};

export const gammeChanged = (gamme, noteparent, typeAccord) => {
  console.log(noteparent)
  Actions.PositionView({noteparent, typeAccord, gamme})
  return {
    type: GAMME_CHANGED,
    payload: gamme,
  };
};

export const positionClicked = (gamme, noteparent) => {
  console.log(noteparent);
  Actions.TestManche({ noteparent, gamme });
  return {
    type: POSITION_CLICKED,
    payload: gamme
  };
};
