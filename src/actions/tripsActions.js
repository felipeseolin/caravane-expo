import firebase from 'firebase';

export const SET_MY_TRIPS = 'SET_MY_TRIPS';
export const setMyTrips = (caravanas) => ({
  type: SET_MY_TRIPS,
  caravanas
});

export const watchTrips = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref('/caravanas')
      .on('value', (snapshot) => {
        const caravanas = snapshot.val();
        const action = setMyTrips(caravanas);
        dispatch(action);
      });
  };
};
