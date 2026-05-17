import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import type { Training } from "../types";

const COLLECTION_NAME = "trainings";

//Lisää treeni
export const addTrainingToFirestore = async (training: Training) => {
    try {
        const docRef = await addDoc(
            collection(db, COLLECTION_NAME),
            training
        );
        
        return docRef.id;
        
    } catch (error) {
        console.error("Virhe lisättäessä treeniä:", error);
    }
};

//Hae treenit
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

//Poista treeni
export const deleteTrainingFromFirestore = async (
    id: string
) => {
    try {
        await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
        console.error("Virhe poistettaessa treeniä:", error);
    }
};

//Päivitä treeni
export const updateTrainingInFirestore = async (
    id: string,
    updatedTraining: Partial<Training>
) => {
    try {
        const trainingRef = doc(db, COLLECTION_NAME, id);

        await updateDoc(trainingRef, updatedTraining);
    } catch (error) {
        console.error("Virhe päivitettäessä treeniä:", error);
    }
};

export const getTrainingById = async (
    id: string
): Promise<Training | null> => {

    try {

        const docRef = doc(db, COLLECTION_NAME, id);

        const snapshot = await getDoc(docRef);

        if (!snapshot.exists()) {
            return null;
        }

        return {
            id: snapshot.id,
            ...(snapshot.data() as Omit<Training, "id">),
        };

    } catch (error) {

        console.error(
            "Virhe haettaessa treeniä:",
            error
        );

        return null;
    }
};