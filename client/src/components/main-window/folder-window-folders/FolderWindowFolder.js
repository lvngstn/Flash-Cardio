import './FolderWindowFolders.css';
import FolderWindowFiles from '../folder-window-flashcards/FolderWindowFiles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditorNavButton } from '../../button/NavigationButtons';

function FolderWindowFolder({children, folderData }) {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="file-item">
            <div className="file-header" onClick={toggleVisibility}>
                <div className="file-header-left">
                    <button className="dropdown-btn">{isVisible ? '►' : '▼'}</button>
                    <span className="folder-name">{folderData.name}</span>
                </div>
                <div className="file-header-right">
                    <button onClick={(e) => {
                        e.stopPropagation();  
                        navigate('/Editor', { state: { folderEditData: folderData } });
                    }} 
                        className='folder-edit-util'>...</button>
                    <span>+</span>
                </div>
            </div>

            {!isVisible && (
                <div className="file-content">
                    <div className="window-flashcard-items">
                        {folderData.flashcards.map((file, index) => (
                            <FolderWindowFiles key={index}>
                                {file.front}
                            </FolderWindowFiles>
                        ))}
                    </div>
                    <div className="window-folder-items">
                        {folderData.nestedFolders.map((nestedFolder, index) => (
                            <FolderWindowFolder
                                key={index}
                                nestedFolders={nestedFolder.nestedFolders}
                                files={nestedFolder.files}
                            >
                                {nestedFolder.name}
                            </FolderWindowFolder>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FolderWindowFolder;
