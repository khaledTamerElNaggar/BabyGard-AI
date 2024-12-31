
import { Link } from 'react-router-dom';

import './Gallery.css'

export default function Gallery() {
    return (
      <div className="gallery-page">
        <header className="header">
          <h1>Gallery</h1>
          <a href="#profile">
            <img src="/src/assets/profile-icon.png" alt="Profile" />
            <span>Profile</span>
          </a>
        </header>
  
        <main className="gallery">
          <div className="gallery-item">
            <img src="/src/assets/B1.jpg" alt="Painting 1" />
            <h3>First Month</h3>
            <p>Day one of the first month.</p>
            <div className="date">Date: December 20, 2024</div>
          </div>
          <div className="gallery-item">
            <img src="/src/assets/B2.jpg" alt="Painting 2" />
            <h3>First Year</h3>
            <p>Day one of the first year.</p>
            <div className="date">Date: December 22, 2024</div>
          </div>
        </main>
  
        <nav className="nav-bar" id="MyBottomNav">
          <a href="http://localhost:5173/">
            <img src="/src/assets/home-icon.png" alt="Home" />
            <span>Home</span>
          </a>
          <a href="http://localhost:5173/Calendar">
            <img src="/src/assets/calendar-icon.png" alt="Calendar" />
            <span>Calendar</span>
          </a>
          <a href="http://localhost:5173/Chat">
            <img src="/src/assets/chat-icon.png" alt="Chat" />
            <span>Chat</span>
          </a>
          <a href="http://localhost:5173/Health">
            <img src="/src/assets/health-icon.png" alt="Health" />
            <span>Health</span>
          </a>
          <a href="http://localhost:5173/Gallery">
            <img src="/src/assets/gallery-icon.png" alt="Gallery" />
            <span>Gallery</span>
          </a>
        </nav>
      </div>
    );
  }  