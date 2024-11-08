import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Message from "../components/Message";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/message" element={<Message />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
