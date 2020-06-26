import * as admin from 'firebase-admin';

try {
  admin.initializeApp();
} catch (e) {}

const messagingInstance = admin.messaging();


export async function sendPostNotification(
    topic: string,
    datamap: {}
  ) {
    await messagingInstance.sendToTopic(topic, {
      data: {
        data: JSON.stringify(datamap)
      }
    })
  }