import * as firebaseAdmin from 'firebase-admin';

var serviceAccount = require("/Users/nikhilpatil/Documents/projects/keys/worksheet/testing-45c2e-firebase-adminsdk-rvy5e-276053c0a6.json");

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount)
    });
}
export { firebaseAdmin };