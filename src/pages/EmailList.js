import { useState, useEffect } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import '../Styles/email_list.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from '../components/Section';
import EmailRow from '../components/EmailRow';
import { getEmails } from '../services/database';
import {db} from '../database/db_config';
import { collection, onSnapshot } from "firebase/firestore";


function EmailList() {
    const [emails, setEmails] = useState([]);
    
    useEffect(() => {
        const getMails = async () => {
            const emails = await getEmails();
           setEmails(emails);           
        }

        onSnapshot(collection(db, "emails"), (snapshot) => {
            getMails();       
        });

    }, []);

  return (
    <div className='email-list'>
        <div className='email_list_settings'>
            <div className='email_settings_left'>
                <Checkbox />
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className='email_list_settings_right'>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>

        <div className='email_list_sections'>
            <Section Icon={InboxIcon} title='Primary' color='red' selected />
            <Section Icon={PeopleIcon} title='Social' color='#1a73e8' />
            <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
        </div>

        <div className='mail_list_list'>
            {emails && emails.map((mail) => (
                <EmailRow 
                    key={mail.docId}
                    id={mail.docId}
                    title={mail.to}
                    subject={mail.subject}
                    description={mail.message}
                    time={new Date(mail.timestamp?.seconds*1000).toUTCString()}
            />    
            ))}
        </div>

    </div>
  )
}

export default EmailList;
