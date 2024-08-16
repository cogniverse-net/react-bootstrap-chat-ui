import React, { useRef, useState } from 'react';
import Picker from '@emoji-mart/react';
import './ChatPane.css';    


const ChatPane = ({ isSidebarShrunk, isReferenceSectionVisible, userStatus }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState('');
    const textareaRef = useRef(null);

    const getStatusClass = () => {
        return userStatus === 'online' ? 'status-green' : 'status-red';
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const addEmoji = (emoji) => {
        const cursorPosition = textareaRef.current.selectionStart;
        const newText =
            message.slice(0, cursorPosition) +
            emoji.native +
            message.slice(cursorPosition);
        setMessage(newText);
        setShowEmojiPicker(false);
    };

    return (
        <div className={`chat-pane d-flex flex-column ${isSidebarShrunk ? 'chat-pane-expanded-left' : 'chat-pane-shrink-left'} ${isReferenceSectionVisible ? 'chat-pane-shrink-right':'chat-pane-expanded-right'}`}>
            {/* Chat Header */}
            <div className="chat-header d-flex align-items-center p-3 border-bottom">
                <img src="https://via.placeholder.com/40" alt="Contact Avatar" className="me-3" />
                <div>
                    <h5>Contact Name</h5>
                    <span className={`badge text-bg-success rounded-pill status-indicator ${getStatusClass()}`}></span>
                    <span className="online-status">Last seen: 2 hours ago</span>
                    
                </div>
            </div>

            {/* Chat Body */}
            <div className="chat-body p-3 flex-grow-1 overflow-auto">
                <div className="message-bubble received">
                    Hello! How are you?
                    <span className="timestamp">10:30 AM</span>
                </div>
                <div className="message-bubble sent">
                    I'm good, thanks! How about you?
                    <span className="timestamp">10:31 AM</span>
                </div>
                {/* More messages */}
            </div>

            {/* Input Area */}
            <div className="input-area d-flex p-3 border-top bg-white">
                <button className="btn btn-outline-secondary" onClick={toggleEmojiPicker}>
                    😊
                </button>
                <textarea 
                    id="chat_pane_msg_draft"
                    className="form-control mx-2" 
                    rows="1" 
                    placeholder="Type a message..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    ref={textareaRef}
                ></textarea>
                <button className="btn btn-primary">Send</button>
            </div>
            {showEmojiPicker && (
                <div className="emoji-picker">
                    <Picker onEmojiSelect={addEmoji} />
                </div>
            )}
        </div>
    );
};

export default ChatPane;
