import { firebase } from '@firebase/app';
import "@firebase/auth";
import "@firebase/database";
import "@firebase/firestore";
import "@firebase/functions";
import config from '../config/firebaseInfo';

try {
    firebase.app()
} catch(error) {
    firebase.initializeApp(config);
}

export default firebase;