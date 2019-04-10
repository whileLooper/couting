import app from 'firebase/app';
import 'firebase/auth';
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
    this.db = app.firestore();
  }

  // create api here
  companies = (componentId) => this.db.collection('companies').get().then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    })
  });

  submitForm = (formValues) => this.db.collection('payrolls').doc('companyID1').set(formValues);

  getFormByComponent = (componentId) => this.db.ref(`/companies/${componentId}`);
}

export default Firebase;