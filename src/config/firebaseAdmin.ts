import * as firebaseAdmin from 'firebase-admin';

var serviceAccount = require("/Users/nikhilpatil/Documents/worksheet-admin/testing-45c2e-firebase-adminsdk-rvy5e-729d774a01.json");

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount)
    });
}
export { firebaseAdmin };