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
    .then(() => console.log(`Document successfully stored at ${collectionPath}`))
    .catch((error) => {
      throw new Error(`Failed to store document at ${collectionPath} : ${error}`);
    });
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
    .then(() => console.log(`Document updated successfully at ${collectionPath}`))
    .catch((error) => {
      throw new Error(`Failed to update document at ${collectionPath} : ${error}`);
    });
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
      }else {
        throw new Error(`Document doesn't exist at ${collectionPath}`);
      }
    }).catch((error) => {
      throw new Error(`Failed to get document from ${collectionPath} : ${error}`);
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
    .then(() => console.log(`Document successfully deleted from ${collectionPath}`))
    .catch((error) => {
      throw new Error(`Failed to delete document from ${collectionPath} : ${error}`);
    });
};
