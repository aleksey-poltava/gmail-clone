import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./pages/EmailList";
import Mail from "./pages/Mail";

function App() {
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
      </div>
    </BrowserRouter>
  );
}

export default App;
