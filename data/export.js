(async () => {
  const fs = require('fs').promises;
  const admin = require('firebase-admin');
  const serviceAccount = require('./serviceAccountKey.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://star-wars-bf531.firebaseio.com'
  });
  
  const collectionName = 'characters';
  const db = admin.firestore();
  db.settings({ timestampsInSnapshots: true });

  const data = {};
  data[collectionName] = {};

  const snapshot = await db.collection(collectionName).get();
  snapshot.forEach(doc => {
    data[collectionName][doc.id] = doc.data();
  });
  
  await fs.writeFile('characters.json', JSON.stringify(data));
  console.log('Export complete!');
})();