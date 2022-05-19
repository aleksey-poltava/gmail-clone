import { Checkbox, IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import '../Styles/email_row.scss';
import { useNavigate } from 'react-router-dom';

function EmailRow({id, title, subject, description, time}) {
    let navigate = useNavigate();

    function handleOpen(id) {
        navigate("/mail");
    }

  return (
    <div className='email_row' onClick={() => handleOpen(id)}>
        <div className='email_row_options'>
            <Checkbox />
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
        </div>
        <h3 className='email_row_title'>
            {title}
        </h3>
        <div className='email_row_message'>
            <h4>
                {subject}
                <span className='email_row_description'> - {description}</span>
            </h4>
        </div>
        <p className='email_row_time'>{time}</p>
    </div>
  )
}

export default EmailRow;