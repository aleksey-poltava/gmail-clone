import { Checkbox, IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import '../Styles/email_row.scss';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { selectMail } from '../redux/features/mailSlice';

function EmailRow({id, title, subject, description, time}) {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function handleOpen(id) {
        navigate("/mail");
    }

    const openMail = () => {
        dispatch(selectMail({
            id, title, subject, description, time,
        }));

        navigate("/mail");
    }

  return (
    <div className='email_row' onClick={openMail}>
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