import logo from './logo.svg';
import './App.css';
import {Form} from "./components/Form"
import { Navbar } from './components/Navbar';
import { Routes,Route } from "react-router-dom"
import { Dashboard } from './components/Dashboard';
import { Contests } from './components/Contests';
import { AdminLogin } from './components/AdminLogin';
import { useContext } from 'react';
import { AuthContext } from './components/contexts/AuthContext';

function App() {
  const {token,setToken,handleToken}=useContext(AuthContext)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      
        <Route path="/" element={!token?<Contests/>:<Dashboard/>}/>
      
      <Route path="form" element={<Form/>}/>
      <Route path="login" element={<AdminLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
