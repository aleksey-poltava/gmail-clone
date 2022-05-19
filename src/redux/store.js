import {configureStore} from 'react-redux';
import mailReducer from './features/mailSlice';

export default configureStore({
    reducer: {
        mail: mailReducer,
    }
});