import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};
/*database.ref('expenses').once('value').then((snapshot) =>{
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});*/

/*database.ref('expenses').on('value',(snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
})*/



 /* database.ref('expenses').push({
      description:'coffee',
      note:'',
      amount:10,
      createAt:90876
  });
  database.ref('expenses').push({
    description:'Phone bill',
    note:'',
    amount:200,
    createAt:903876
});
database.ref('expenses').push({
    description:'rent',
    note:'',
    amount:760,
    createAt:90876
});*/
/*database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
    console.log(e);
});

setTimeout(() => {
    database.ref('age').set(28);
}, 3500);*/
/*database.ref().set({
      name: 'Jenny',
      age: 31,
      stressLevel: 6,
      job: {
          title: 'software developer',
            company: 'Google'
        },
      location: {
          city: 'Philadelphia',
          country: 'United States'
      }  
  }).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});


database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
}); */
//database.ref('age').set(27);
//database.ref('location/city').set('New Jersey');
/*database.ref().remove()
.then(() => {
    console.log('Data was removed');
}).catch((e) => {
    console.log('Did not remove data', e);
});*/