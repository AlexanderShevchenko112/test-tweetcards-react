import UserList from "../pages/userList/UserList";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "../pages/home/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<UserList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
