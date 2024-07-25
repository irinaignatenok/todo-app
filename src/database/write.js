import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './config';

export async function save(data) {
    try {
        const dbCollection = collection(db, 'toDo')
        const docRef = await addDoc(dbCollection, data);
        console.log("docRef", docRef.id)
        return docRef.id
    } catch (err) {
        return null
    }
}

export async function update(id, data) {
    try {
        const docRef = doc(db, "toDo", id);
        await updateDoc(docRef, data);
        return true;
    } catch (error) {
        console.error("Error updating document:", error);
        return false;
    }
}
export async function remove(id) {

    try {
        const docRef = doc(db, "toDo", id)
        await deleteDoc(docRef);
        return true
    }
    catch (e) {
        return false
    }
}