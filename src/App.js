import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import SendMail from "./components/SendMail";
import Sidebar from "./components/Sidebar";
import EmailList from "./pages/EmailList";
import Login from "./pages/Login";
import Mail from "./pages/Mail";
import { selectSendMessageIsOpen } from "./redux/features/mailSlice";
import { login, selectUser } from "./redux/features/userSlice";
import './Styles/App.scss';
import {useEffect} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const firebaseAuth = getAuth();
  
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }))
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail />}

      </div>
      )}      
    </BrowserRouter>
  );
}

export default App;
