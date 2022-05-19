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

function EmailList() {
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
            <EmailRow 
                title='Twitch'
                subject='Hey follow streamer!!!'
                description='This is the test'
                time='10 PM'
            />
            <EmailRow 
                title='Twitch'
                subject='Hey follow streamer!!!'
                description='This is the test'
                time='10 PM'
            />
        </div>

    </div>
  )
}

export default EmailList;
