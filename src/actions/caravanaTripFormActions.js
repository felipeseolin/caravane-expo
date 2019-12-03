import * as firebase from 'firebase';
import { Alert } from 'react-native';

export const SET_FIELD_TRIP = 'SET_FIELD_TRIP';
export const setFieldTrip = (field, value) => ({
  type: SET_FIELD_TRIP,
  field,
  value,
});

export const RESET_FORM_TRIP = 'RESET_FORM_TRIP';
export const resetFormTrip = () => ({
  type: RESET_FORM_TRIP,
});

export const TRIP_SAVED_SUCCESS = 'TRIP_SAVED_SUCCESS';
export const tripSavedSuccess = () => ({
  type: TRIP_SAVED_SUCCESS,
});

export const saveTrip = (trip, caravana) => {
  const { currentUser } = firebase.auth();

  return async (dispatch) => {
    if (trip.id && caravana.id) {
      // Update
      await firebase
        .database()
        .ref(`/caravanas/${caravana.id}/passengers/${trip.id}`)
        .set(trip);
    } else {
      // Insert
      await firebase
        .database()
        .ref(`/caravanas/${caravana.id}/passengers`)
        .push({ ...trip, userId: currentUser.uid });
    }

    dispatch(tripSavedSuccess());
  };
};

export const SET_ALL_FIELDS_TRIP = 'SET_ALL_FIELDS_TRIP';
export const setAllFieldsTrip = (trip) => ({
  type: SET_ALL_FIELDS_TRIP,
  trip,
});

export const deleteTrip = (trip, caravana) => (dispatch) => new Promise((resolve, reject) => {
  Alert.alert(
    'Excluir',
    `Deseja realmente excluir a vaga para: ${trip.passenger}?`,
    [
      {
        text: 'Não',
        onPress: () => {
          resolve(false);
        },
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await firebase
              .database()
              .ref(`/caravanas/${caravana.id}/passengers/${trip.id}`)
              .remove();
            resolve(true);
          } catch (e) {
            reject(e);
          }
        },
      },
    ],
    { cancelable: false },
  );
});
