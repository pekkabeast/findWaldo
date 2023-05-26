const config = {
  apiKey: "AIzaSyCk4K4Bq5vm7TFW-kscBcWu6spcky2t7jk",
  authDomain: "findwaldo-bceb0.firebaseapp.com",
  projectId: "findwaldo-bceb0",
  storageBucket: "findwaldo-bceb0.appspot.com",
  messagingSenderId: "420906037443",
  appId: "1:420906037443:web:0961f59b7e27de128e7276",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
