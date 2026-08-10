import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyArlmIMWuBj8TXpbiBKlms2jlrRCs41i90",
  authDomain: "qr-menu-ce000.firebaseapp.com",
  projectId: "qr-menu-ce000",
  storageBucket: "qr-menu-ce000.appspot.com",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
