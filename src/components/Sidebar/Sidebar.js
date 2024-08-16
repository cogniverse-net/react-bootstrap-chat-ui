// Sidebar.js
import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isSidebarShrunk, toggleSidebar }) => {
    
    return (
        <div className={`sidebar ${isSidebarShrunk ? 'sidebar-shrunk' : ''}`}>
            {/* Profile Section */}
            <div className="profile mb-4">
                <img src="https://via.placeholder.com/40" alt="User Avatar" className="profile-avatar me-2" />
                {!isSidebarShrunk && (
                    <div>
                        <h5>John Doe</h5>
                    </div>
                )}
            </div>
            {/* Search Bar */}
            {!isSidebarShrunk && <input id="sidebar_search" type="text" className="form-control search-bar mb-3" placeholder="Search..." />}
            {/* Contacts List */}
            <ul className="contacts-list">
                <li className="list-group-item bg-dark text-white">
                    <FaUserFriends className="icon" />
                    {!isSidebarShrunk && "Contact 1"}
                </li>
                <li className="list-group-item bg-dark text-white">
                    <FaUserFriends className="icon" />
                    {!isSidebarShrunk && "Contact 2"}
                </li>
                <li className="list-group-item bg-dark text-white">
                    <FaUserFriends className="icon" />
                    {!isSidebarShrunk && "Contact 3"}
                </li>
                {/* Add more contacts as needed */}
            </ul>

            {/* Sidebar Toggle Button */}
            <button 
                className="btn btn-secondary toggle-sidebar-icon" 
                onClick={toggleSidebar}
            >
                {isSidebarShrunk ? '>' : '<'}
            </button>
        </div>
    );
};

export default Sidebar;
