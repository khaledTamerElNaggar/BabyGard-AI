import './Gallery.css'

export default function Home() {
    return (
      <div className="Home-page">
        <header className="header">
          <h1>Home</h1>
          <a href="#profile">
            <img src="/src/assets/profile-icon.png" alt="Profile" />
            <span>Profile</span>
          </a>
        </header>
  
        <h1>Welcome to the Home Page</h1>
        <h1>Welcome to the Home Page</h1>
        <h1>Welcome to the Home Page</h1>
  
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