// ChatApp.js
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ChatPane from '../ChatPane/ChatPane';
import ReferenceSection from '../ReferenceSection/ReferenceSection'; // Import the new component
import '..//styles/themes.css';
import './ChatApp.css';

const ChatApp = () => {
    const [isSidebarShrunk, setIsSidebarShrunk] = useState(false);
    const [userStatus, setUserStatus] = useState('online');
    const [theme, setTheme] = useState('light'); // Default theme
    const [isReferenceSectionVisible, setIsReferenceSectionVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarShrunk(!isSidebarShrunk);
    };

    const toggleReferenceSection = () => {
        setIsReferenceSectionVisible(!isReferenceSectionVisible);
    };

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="container-fluid p-0">
            {/* Top Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ChatApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Themes
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#" onClick={() => changeTheme('light')}>Light</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => changeTheme('dark')}>Dark</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => changeTheme('blue')}>Blue</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => changeTheme('green')}>Green</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => changeTheme('purple')}>Purple</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="chat-container d-flex">
                {/* Sidebar Component */}
                <Sidebar 
                    isSidebarShrunk={isSidebarShrunk} 
                    toggleSidebar={toggleSidebar} 
                    userStatus={userStatus}
                />

                {/* Chat Pane Component */}
                <ChatPane 
                    isSidebarShrunk={isSidebarShrunk} 
                    isReferenceSectionVisible={isReferenceSectionVisible}
                />

                {/* Reference Section Component */}
                <ReferenceSection 
                    isReferenceSectionVisible={isReferenceSectionVisible} 
                    toggleReferenceSection={toggleReferenceSection}
                />
            </div>
        </div>
    );
};

export default ChatApp;
