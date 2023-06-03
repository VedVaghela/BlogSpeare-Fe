
import './App.css';
import { IndexPage } from './components/IndexPage';
import { Layout } from './components/Layout';
import {Route, Routes} from "react-router-dom";
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { UserContextProvider } from './components/UserContext';
import { CreatePost } from './components/CreatePost';
import { BlogPostPage } from './components/BlogPostPage';

function App() {
  return (
    <UserContextProvider> 
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>} />
        <Route path={'/login'} element={<LoginPage/>} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path="/create" element={<CreatePost/>} />
        <Route path="/postblog/:id" element={<BlogPostPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
