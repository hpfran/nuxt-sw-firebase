const functions = require('firebase-functions');
const admin = require('firebase-admin');
const FieldValue = require('firebase-admin').firestore.FieldValue;

admin.initializeApp();

exports.updateCounter = functions.firestore
  .document('characters/{character}')
  .onUpdate(async change => {
    const data = change.after.data();
    const previousData = change.before.data();
    if (data.favourite.length === previousData.favourite.length) return null;
    let count = data.favouriteCount;
    if (!count || count >= 0) {
      count = 0;
    }

    if (data.favourite.length < previousData.favourite.length) {
      return change.after.ref.set(
        {
          favouriteCount: FieldValue.increment(-1),
        },
        { merge: true }
      );
    } else {
      return change.after.ref.set(
        {
          favouriteCount: FieldValue.increment(1),
        },
        { merge: true }
      );
    }
  });
