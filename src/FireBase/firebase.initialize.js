import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;

/*
steps for authentication
------------------------
Initial setup
1. fireBase: create project
2. create web app
3. get configuration
4. initallize firebase
5. enable auth method
*/
