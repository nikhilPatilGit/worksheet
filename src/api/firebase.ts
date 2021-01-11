import {
  FirestoreDataConverter,
  DocumentSnapshot,
} from "@firebase/firestore-types";
import { db } from "src/config/firebase";

export const storeDocumentInCollection = async <T>(
  collectionPath: string,
  id: string,
  genericObject: T,
  converter: FirestoreDataConverter<T>
): Promise<void> => {
  return await db
    .collection(collectionPath)
    .doc(id)
    .withConverter(converter)
    .set(genericObject)
    .then(() => console.log("successfully written"))
    .catch((error) => console.log(error));
};

export const updateDocumentInCollection = async <T>(
  collectionPath: string,
  id: string,
  genericObject: T
): Promise<void> => {
  await db
    .collection(collectionPath)
    .doc(id)
    .update(genericObject)
    .then(() => console.log("Document successfully updated!"))
    .catch((error) => console.error("Error updating document: ", error));
};

export const getDocumentById = async <T>(
  collectionPath: string,
  id: string,
  converter: FirestoreDataConverter<T>
): Promise<T> => {
  return await db
    .collection(collectionPath)
    .doc(id)
    .withConverter(converter)
    .get()
    .then((doc: DocumentSnapshot<T>) => {
      if (doc.exists) {
        return doc.data();
      }
    });
};

export const deleteDocumentById = async (
  collectionPath: string,
  id: string
): Promise<void> => {
  await db
    .collection(collectionPath)
    .doc(id)
    .delete()
    .then(() => console.log("Document successfully deleted!"))
    .catch((error) => console.error("Error removing document: ", error));
};
