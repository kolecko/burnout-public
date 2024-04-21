import { initializeApp } from "firebase/app";
import { getDatabase, set, ref} from "firebase/database";
import {DatabaseConfig} from "./api/database-config";
import {FirebaseApp, FirebaseOptions} from "@firebase/app";

const createFirebaseDefaultConfig = (): FirebaseOptions => {
    return {
        // Your Firebase project configuration
        databaseURL: 'https://burnout-421016-default-rtdb.europe-west1.firebasedatabase.app/',
        // Other configuration options (apiKey, authDomain, etc.)
    }
}

const createFirebaseApp = (config: FirebaseOptions): FirebaseApp => {
    return initializeApp(config)
}

const firebaseWriteForm = (firebaseApp: FirebaseApp, name: string, email: string, subject:string, body: string) => {
    const database = getDatabase(firebaseApp)
    const path = email.substring(0, email.indexOf('@'));
    console.log(path)
    set(ref(database, `form/${path}/`), {
        name,
        email,
        subject,
        body
    }).then(()=>{
        console.log(`User named ${name} sent a post!`)
    })
}

export {
    createFirebaseDefaultConfig,
    createFirebaseApp,
    firebaseWriteForm
}