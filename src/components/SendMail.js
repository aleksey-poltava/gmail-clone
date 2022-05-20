import CloseIcon from '@mui/icons-material/Close';
import '../Styles/send_mail.scss';
import Button from '@mui/material/Button';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../redux/features/mailSlice';

function SendMail() {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        
    }

  return (
    <div className='send_mail'>
        <div className='send_mail_header'>
            <h3>New Message</h3>
            <CloseIcon onClick={() => dispatch(closeSendMessage())} className='send_mail_close'/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input                 
                placeholder='To'
                type='text'
                {...register('to', {required: true})} 
            />
            {errors.to && <span className='send_mail_error'>To field is required</span>}

            <input                 
                placeholder='Subject' 
                type='text' 
                {...register('subject', {required: true})} 
            />
            {errors.subject && <span className='send_mail_error'>Subject field is required</span>}

            <input             
                placeholder='Message'
                type='text'
                className='send_mail_message'
                {...register('message', {required: true})} 
            />
            {errors.message && <span className='send_mail_error'>Message field is required</span>}

            <div className='send_mail_options'>
                <Button className='send_mail_send' variant='contained' color='primary' type='submit'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail;