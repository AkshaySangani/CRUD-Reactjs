import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import { Routes, Route, } from "react-router-dom";
import Adduser from './components/user/Adduser';
import Update from './components/user/Update';
import View from './components/user/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/add" element={<Adduser />} />
        <Route path="/user/update/:id" element={<Update />} />
        <Route path="/user/:id" element={<View />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
}

export default App;
