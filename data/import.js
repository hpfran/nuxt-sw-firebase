(async () => {
  const fs = require('fs').promises;
  const admin = require('firebase-admin');
  const serviceAccount = require('./serviceAccountKey.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://star-wars-bf531.firebaseio.com'
  });

  const db = admin.firestore();
  db.settings({ timestampsInSnapshots: true });

  const data = JSON.parse(await fs.readFile('characters.json', 'utf8'));
  const collectionName = Object.getOwnPropertyNames(data)[0];
  const docObjects = data[collectionName];
  
  for await (const [key, value] of Object.entries(docObjects)) {
    db.collection(collectionName).doc(key).set(value);
    console.log(`Wrote ${key}`)
  };
})();