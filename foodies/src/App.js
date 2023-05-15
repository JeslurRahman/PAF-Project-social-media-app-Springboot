import Home from "./Components/HomePage/Home";
import LoginPage from "./Components/LoginPage/LoginPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserProfile from "./Components/UserProfile/UserProfile";
import UserInfoUpdateF from "./Components/UserProfile/Components/UserInfoUpdateF";
import UpdateUserAboutF from "./Components/UserProfile/Components/UpdateUserAboutF";
import Setting from "./Components/UserProfile/Components/Setting";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/updateUserInfo" element={<UserInfoUpdateF />} />
          <Route path="/updateAbout" element={<UpdateUserAboutF />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
