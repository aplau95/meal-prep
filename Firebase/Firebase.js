import * as firebase from 'firebase';

class Firebase {
    static initialize(){
      firebase.initializeApp({
        apiKey: "AIzaSyCMjMgb2dfeU7wYGM4-k_JjDyW78rKwanI",
        authDomain: "meal-prep-8f7ec.firebaseapp.com",
        databaseURL: "https://meal-prep-8f7ec.firebaseio.com",
        projectId: "meal-prep-8f7ec",
        storageBucket: "meal-prep-8f7ec.appspot.com",
        messagingSenderId: "525794877449",
      });
    }

}

module.exports = Firebase;
