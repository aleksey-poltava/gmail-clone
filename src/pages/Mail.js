import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import '../Styles/mail.scss';
import { useNavigate } from 'react-router-dom';

function Mail() {
  let navigate = useNavigate();

  function handleBack() {
    navigate("/");
}

  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className='mail_tools_left'>
          <IconButton onClick={() => handleBack()}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='mail_tools_rigth'>
        <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className='mail_body'>
        <div className='mail_body_header'>
          <h2>Subject</h2>
          <LabelImportantIcon className='mail_important' />
          <p>Title</p>
          <p className='mail_time'>10 PM</p>
        </div>
        <div className='mail_message'>
          <p>This is a message</p>
        </div>
      </div>
    </div>
  )
}

export default Mail;