import {db} from '../database/db_config';
import { collection, query, getDocs, setDoc, doc, Timestamp, orderBy, limit, onSnapshot } from "firebase/firestore";

export async function addMailToDb(messageObject) {
    try {
        const mailsRef = collection(db, "emails");
        await setDoc(doc(mailsRef), {
            to: messageObject.to,
            subject: messageObject.subject,
            message: messageObject.message,
            timestamp: Timestamp.now()
        });

        return true;
    } catch (error) {
        console.log('error in addMailToDb: ', error);
        return false;
    }
}

  
export async function getEmails() {
    try {
        const q = query(collection(db, "emails"), orderBy("timestamp", "desc"), limit(20));

        const querySnapshot = await getDocs(q);
        const emails = querySnapshot.docs.map((mail) => ({...mail.data(), docId: mail.id}));

        console.log(emails);

        return emails;

    } catch (error) {
        console.log('error in addMailToDb: ', error);
        return null;
    }    
}