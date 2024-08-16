// ReferenceSection.js
import React from 'react';
import './ReferenceSection.css'; // Create this file for CSS

const ReferenceSection = ({ isReferenceSectionVisible, toggleReferenceSection }) => {
    return (
        <div className={`reference-section ${isReferenceSectionVisible ? 'visible' : 'hidden'}`}>
            <button className="btn btn-secondary toggle-reference-section" onClick={toggleReferenceSection}>
                {isReferenceSectionVisible ? 'Hide' : 'Show'}
            </button>
            <div className="content">
                {/* Your reference-hand section content goes here */}
                <h4>Additional Information</h4>
                <p>This is the content of the reference-hand section.</p>
            </div>
        </div>
    );
};

export default ReferenceSection;
