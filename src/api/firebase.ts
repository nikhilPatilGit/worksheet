import {
  FirestoreDataConverter,
  QuerySnapshot,
  QueryDocumentSnapshot,
  DocumentData,
  DocumentSnapshot,
} from "@firebase/firestore-types";
import { db } from "src/config/firebase";
import { typeCheckObject } from "src/helper/TypeChecks";

export const storeDocumentInCollection = async <T>(
  collectionPath: string,
  id: string,
  genericObject: T,
  converter: FirestoreDataConverter<T>
): Promise<void> => {

  console.log(typeCheckObject(genericObject, {"_inputText":"Nikhil"}));

  return await db
    .collection(collectionPath)
    .doc(id)
    .withConverter(converter)
    .set(genericObject)
    .then(() => console.log("successfully written"))
    .catch((error) => console.log(error));
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
