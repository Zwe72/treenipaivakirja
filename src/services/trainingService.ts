import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import type { Training } from "../types";

const COLLECTION_NAME = "trainings";

//Lisää treeni
export const addTrainingToFirestore = async (training: Training) => {
    try {
        await addDoc(collection(db, COLLECTION_NAME), training);
    } catch (error) {
        console.error("Virhe lisättäessä treeniä:", error);
    }
};

export const getTrainingsFromFirestore = async (): Promise<Training[]> => {
    try {
        const q = query(
            collection(db, COLLECTION_NAME),
            orderBy("date", "desc")
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<Training, "id">),
        }));
    } catch (error) {
        console.error("Virhe haettaessa treenejä:", error);
        return [];
    }
};
