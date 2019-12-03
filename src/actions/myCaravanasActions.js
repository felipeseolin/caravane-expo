import firebase from 'firebase';

export const SET_MY_CARAVANAS = 'SET_MY_CARAVANAS';
export const setMyCaravanas = (caravanas) => ({
  type: SET_MY_CARAVANAS,
  caravanas
});

export const watchCaravanas = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref('/caravanas')
      .orderByChild('userId')
      .equalTo(currentUser.uid)
      .on('value', (snapshot) => {
        const caravanas = snapshot.val();
        const action = setMyCaravanas(caravanas);
        dispatch(action);
      });
  };
};
