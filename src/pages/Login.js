import { Button } from '@mui/material';
import '../Styles/login.scss';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const auth = getAuth();
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const signIn = async (formData) => {    
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }));
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

  return (
    <div className='login'>
        <div className='login_container'>
            <img 
                src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg'
                alt=''
            />
            <form onSubmit={handleSubmit(signIn)}>
                <input 
                    type='email'
                    placeholder='Login'
                    {...register('email', {required: true})}
                />
                <input
                    type='password'
                    placeholder='Password'
                    {...register('password', {required: true})}
                />
                <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                >
                    Login
                </Button>
            </form>
        </div>
    </div>
  )
}

export default Login;