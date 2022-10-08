import { Route, Routes } from "react-router-dom";
import Title from "./Title/Title";
import AddpostContainer from "./Posts/Addpost/AddpostContainer";
import PostsContainer from "./Posts/PostsContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = (props) => {
  return (
    <Routes>
      <Route path="/" element={<PostsContainer />} />
      <Route path="/favorites" element={<PostsContainer />} />
      <Route path="/last" element={<PostsContainer />} />
      <Route path="/subscribe" element={<PostsContainer />} />
      <Route path="/statistics" element={<Title />} />
      <Route path="/users" element={<UsersContainer/>} />
      <Route path="/addpost" element={<AddpostContainer />} />
    </Routes>
  );
};

export default Content;
