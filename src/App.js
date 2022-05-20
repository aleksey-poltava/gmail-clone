import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import SendMail from "./components/SendMail";
import Sidebar from "./components/Sidebar";
import EmailList from "./pages/EmailList";
import Mail from "./pages/Mail";
import { selectSendMessageIsOpen } from "./redux/features/mailSlice";
import './Styles/App.scss';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
