# Adding data to Firebase/Firestore

Navigate to your [Firebase console](https://console.firebase.google.com/) and hit the cogwheel in the upper left corner, then select `Service Accounts` from the tabs and hit the `Generate New Private Key` button. This will download a `json` file - rename that to `serviceAccountKey.json` and copy it over to this folder.

Once the `json` file is in the right location, execute `node import.js`. This will create the appropriate collection and write the data to your Firebase account.