import { collection, getDocs } from "firebase/firestore";
import { db } from './config'

export async function load() {
    const querySnapshot = await getDocs(collection(db, 'toDo'))
    return processQuerySnapshot(querySnapshot)
}

function processQuerySnapshot(querySnapshot) {
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id
        })
    });
    return data
}