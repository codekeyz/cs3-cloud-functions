import * as admin from 'firebase-admin';

try {
  admin.initializeApp();
} catch (e) {}

const databaseInstance = admin.firestore();


export async function updatePostData(
    postID: string,
    datamap: {}
  ) {
    await databaseInstance.doc(`Posts/${postID}`).update(datamap);
    return datamap;
  }
  