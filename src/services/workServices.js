import firebase from "./firebase.config";

export const addWork = (data) => {
  firebase.firestore().collection("Works").add(data);
};

export const getAllWorks = (onWorkChanged) => {
  firebase
    .firestore()
    .collection("Works")
    .onSnapshot((snapshot) => {
      const newWork = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      onWorkChanged(newWork);
    });
};

export const deleteWork = (id) => {
  console.log(`deleteing ${id}`);
  firebase.firestore().collection("Works").doc(id).delete();
};

export const getWorkById = (work, id) => {
  console.log(`getting ${id}`);
  firebase
    .firestore()
    .collection("Works")
    .doc(id)
    .get()
    .then((docRef) => {
      work(docRef.data());
    });
};

export const updateWork = (id, data) => {
  console.log(`updating ${id} , ${data.company}`);
  firebase.firestore().collection("Works").doc(id).set(data);
};
