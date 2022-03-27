
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CommentPage from "./pages/CommentPage";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/home" element={<HomePage /> } />
        
        <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/" element={ <LoginPage/> } />
        <Route path="/postdetails/:postId" element={ <CommentPage/> } />

      </Routes>
    </Router>

  );
}

export default App;
