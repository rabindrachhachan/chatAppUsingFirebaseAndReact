import * as types from './messageActionTypes';

export const retrieveMessage = ({ uid,message }) => {
  return {
    type: types.RETRIEVE_MESSAGE,
    uid,
    message,
    displayName:uid.displayName,
    photoURL:uid.photoURL
  }
};

export const sendMessageInProgress = (payload) => {
  return {
    type: types.SEND_MESSAGE,
    ...payload
  }
};

export const sendMessageSuccess = () => {
  return {
    type: types.SEND_MESSAGE_SUCCESS
  }
};

export const sendMessageError = () => {
  return {
    type: types.SEND_MESSAGE_ERROR
  }
};

export const sendMessage = (message) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    const { displayName } = getState().users[uid];
    const { photoURL } = getState().users[uid];
    if (uid !== 0) {
      dispatch( sendMessageInProgress({uid,displayName,photoURL,message}) );
      firebase.database().ref('messages').push({
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        message,
        uid:{
            displayName,
            photoURL
        },
      });
    } else {
      dispatch( sendMessageError() );
    }
  }
};
