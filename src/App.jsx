import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Chat from './pages/Chat';
import Health from './pages/Health';
import Calendar from './pages/Calendar';

import axios from 'axios';

function App() {
  const [array, setArray] = useState([]);

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://127.0.0.1:8080/api/users")
  //   console.log(response.data.users)
  //   setArray(response.data.users)
  // };
                                                                          // API TEST
  // useEffect(() => {
  //   fetchAPI()
  // }, []);

  return (
    <>
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </Router>


          {/* {
            array.map((user, index) => (
              <div key = {index}>                    API TEST
              <span>{user}</span>
              <br></br>
              </div>
            ))} */}

      </div>
    </>
  )
}

export default App
