import app from 'firebase/app';
import 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCQ1ADMKQ0kmQAmhpjZEuKvpuKjd_uzcvM",
  authDomain: "easyaccouting-38d07.firebaseapp.com",
  databaseURL: "https://easyaccouting-38d07.firebaseio.com",
  projectId: "easyaccouting-38d07",
  storageBucket: "easyaccouting-38d07.appspot.com",
  messagingSenderId: "378184926337"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // create api here
  companies = () => this.db.ref('/companies');

  submitForm = (input) => this.db.ref('/companies').set({
    // mapping different input properties
  });

  getFormByComponent = (componentId) => this.db.ref(`/companies/${componentId}`);
}

export default Firebase;