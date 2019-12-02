import firebase from 'firebase';

export const SET_ALL_CARAVANAS = 'SET_ALL_CARAVANAS';
export const setAllCaravanas = (caravanas) => ({
  type: SET_ALL_CARAVANAS,
  caravanas,
});

export const watchAllCaravanas = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref('/caravanas')
      .on('value', (snapshot) => {
        const caravanas = snapshot.val();
        const action = setAllCaravanas(caravanas);
        dispatch(action);
      });
  };
};
