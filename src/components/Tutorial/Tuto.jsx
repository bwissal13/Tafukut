
// import React, { useState } from 'react';
//  import ReactPlayer from 'react-player';
//  import Editor from './Editor';

// const Tuto = () => {
  
//   const [activeElement, setActiveElement] = useState('video');

//   const videoUrl = 'https://www.youtube.com/watch?v=yourvideo';

//   const handleVideoClick = () => {
//     setActiveElement('editor');
//   };

//   const handleEditorChange = (newCode) => {
//     setCode(newCode);
//     // Implement code execution or other actions here
//   };

//   const editorDidMount = (editor, monaco) => {
//     // Optional: Perform actions when the editor mounts
//     editor.focus();
//   };

//   return (
//     <div className="app-container">
//       <div className={`video-container ${activeElement === 'video' ? 'active' : ''}`}>
//         <ReactPlayer
//           url={videoUrl}
//           playing={activeElement === 'video'}
//           controls
//           onClick={handleVideoClick}
//           width="100vw"
//           height="100vh"
//         />
//       </div>
//       <div className={`code-editor-container ${activeElement === 'editor' ? 'active' : ''}`}>
//       <Editor />
//       </div>
//     </div>
//   );
// };

// export default Tuto;
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Editor from './Editor'; // Assuming Editor component handles code editing

const Tuto = () => {
  const [activeElement, setActiveElement] = useState('video');
  const [code, setCode] = useState(`console.log('Hello, world!');`); // State for code in editor

  const videoUrl = 'https://www.youtube.com/watch?v=yourvideo';

  const handleVideoClick = () => {
    setActiveElement(activeElement === 'video' ? 'editor' : 'video');
  };

  const handleEditorChange = (newCode) => {
    setCode(newCode);
    // Implement code execution or other actions here
  };

  const editorDidMount = (editor, monaco) => {
    // Optional: Perform actions when the editor mounts
    editor.focus();
  };

  return (
    <div className="app-container">
      <div className={`video-container ${activeElement === 'video' ? 'active' : ''}`}>
        <ReactPlayer
          url={videoUrl}
          playing={activeElement === 'video'}
          controls
          onClick={handleVideoClick}
          width="100vw"
          height="100vh"
        />
      </div>
      <div className={`code-editor-container ${activeElement === 'editor' ? 'active' : ''}`}>
        <Editor
          code={code} // Pass code state to Editor component
          onChange={handleEditorChange} // Pass onChange handler to Editor component
          editorDidMount={editorDidMount} // Pass editorDidMount handler to Editor component
        />
      </div>
    </div>
  );
};

export default Tuto;
