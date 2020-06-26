import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as databaseHelper from "./helpers/database";
import * as messageHelper from "./helpers/messaging";

try {
  admin.initializeApp();
} catch (e) {}

export const sendNewPostAlert = functions.firestore
  .document("Posts/{postID}")
  .onCreate(async (snap, event) => {
    const payload = snap.data();

    if (payload === undefined) {
      return null;
    }
    payload["timestamp"] = new Date().getTime();

    const _result = await databaseHelper.updatePostData(snap.id, payload);

    await messageHelper.sendPostNotification("Post", _result);

    return;
  });
