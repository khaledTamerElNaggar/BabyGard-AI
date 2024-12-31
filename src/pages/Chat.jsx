import { Link } from 'react-router-dom'; // Import Link for routing
import './Chat.css'; // Assuming you're reusing the CSS file
import profileIcon from '/src/assets/profile-icon.png'; // Import assets
import homeIcon from '/src/assets/home-icon.png';
import calendarIcon from '/src/assets/calendar-icon.png';
import chatIcon from '/src/assets/chat-icon.png';
import healthIcon from '/src/assets/health-icon.png';
import galleryIcon from '/src/assets/gallery-icon.png';

export default function Chat() {
    return (
      <div className="Chat-page">
        {/* Header Section */}
        <header className="header">
          <h1>Chat</h1>
          <Link to="/profile">
            <img src={profileIcon} alt="Profile" />
            <span>Profile</span>
          </Link>
        </header>
        
        {/* Main Content */}
        <main className="chat-container">
          <div className="chat-messages">
            {/* Example messages */}
            <div className="message received">Hello! How can I assist you today?</div>
            <div className="message sent">I need help with the website navigation.</div>
          </div>
          
          <div className="chat-input-container">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="chat-input"
            />
            <button className="send-button">Send</button>
          </div>
        </main>
        
        {/* Navigation Bar */}
        <nav className="nav-bar" id="MyBottomNav">
          <Link to="/">
            <img src={homeIcon} alt="Home" />
            <span>Home</span>
          </Link>
          <Link to="/Calendar">
            <img src={calendarIcon} alt="Calendar" />
            <span>Calendar</span>
          </Link>
          <Link to="/Chat">
            <img src={chatIcon} alt="Chat" />
            <span>Chat</span>
          </Link>
          <Link to="/Health">
            <img src={healthIcon} alt="Health" />
            <span>Health</span>
          </Link>
          <Link to="/Gallery">
            <img src={galleryIcon} alt="Gallery" />
            <span>Gallery</span>
          </Link>
        </nav>
      </div>
    );
}