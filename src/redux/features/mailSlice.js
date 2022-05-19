import {createSlice} from 'react-redux';

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        value: 
    },
    reducers: {

    }
});

export const selectMail = state => state.mail.value;

export default mailSlice.reducer;