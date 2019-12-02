import * as firebase from 'firebase';
import { Alert } from 'react-native';

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => ({
  type: SET_FIELD,
  field,
  value,
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM,
});

export const CARAVANA_SAVED_SUCCESS = 'CARAVANA_SAVED_SUCCESS';
export const caravanaSavedSuccess = () => ({
  type: CARAVANA_SAVED_SUCCESS,
});

export const saveCaravana = (caravana) => {
  const { currentUser } = firebase.auth();

  return async (dispatch) => {
    if (caravana.id) {
      // Update
      await firebase
        .database()
        .ref(`/caravanas/${caravana.id}`)
        .set(caravana);
    } else {
      // Insert
      await firebase
        .database()
        .ref('/caravanas/')
        .push({ ...caravana, userId: currentUser.uid });
    }

    dispatch(caravanaSavedSuccess());
  };
};

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';
export const setAllFields = (caravana) => ({
  type: SET_ALL_FIELDS,
  caravana,
});

export const deleteMyCaravana = (caravana) => (dispatch) => new Promise((resolve, reject) => {
  Alert.alert(
    'Excluir',
    `Deseja realmente excluir a caravana: ${caravana.title}?`,
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
              .ref(`/caravanas/${caravana.id}`)
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
