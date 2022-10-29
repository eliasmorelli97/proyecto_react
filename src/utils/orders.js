import { addDoc, collection, getFirestore } from "firebase/firestore";

export const createOrder = (newOrder) => {
    const db = getFirestore();
    const collectionReference = collection(db, 'orders');

    return addDoc(collectionReference, newOrder)
        .then((snapshot) => snapshot.id)
        .catch(error => console.warn(error))
};