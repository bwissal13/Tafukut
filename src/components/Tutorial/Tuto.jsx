
// import React, { useState, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import Editor from './Editor';
// import { IconButton } from '@mui/material';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

// const Tuto = () => {
//   const [activeElement, setActiveElement] = useState('video');
//   const [code, setCode] = useState(`console.log('Hello, world!');`);
//   const [playing, setPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.8);
//   const [muted, setMuted] = useState(false);
//   const playerRef = useRef(null);

//   const videoUrl = 'Enregistrement.mp4';

//   const handleVideoClick = () => {
//     setActiveElement(prevElement => (prevElement === 'video' ? 'editor' : 'video'));
//     setPlaying(false); // Stop video playback when switching to editor
//   };

//   const handleEditorChange = (newCode) => {
//     setCode(newCode);
//   };

//   const editorDidMount = (editor, monaco) => {
//     editor.focus();
//   };

//   const togglePlaying = () => {
//     setPlaying(prevPlaying => !prevPlaying);
//   };

//   const increaseVolume = () => {
//     setVolume(prevVolume => Math.min(prevVolume + 0.1, 1));
//   };

//   const decreaseVolume = () => {
//     setVolume(prevVolume => Math.max(prevVolume - 0.1, 0));
//   };

//   const toggleMute = () => {
//     setMuted(prevMuted => !prevMuted);
//   };

//   // Function to handle player ready
//   const handlePlayerReady = (player) => {
//     playerRef.current = player;
//   };

//   // Function to handle player play/pause
//   const handlePlayerPlayPause = () => {
//     setPlaying(prevPlaying => !prevPlaying);
//   };

//   // Function to handle volume change
//   const handleVolumeChange = (newVolume) => {
//     setVolume(newVolume);
//   };

//   // Function to handle mute/unmute
//   const handleMuteToggle = () => {
//     setMuted(prevMuted => !prevMuted);
//   };

//   // Function to handle play click in editor view
//   const handlePlayFromEditor = () => {
//     setActiveElement('video'); // Switch activeElement to video
//     setPlaying(true); // Start playing the video
//   };

//   return (
//     <div className="app-container">
//       <div className="video-editor-container">
//         {/* Video Player */}
//         <div className={`video-container ${activeElement === 'video' ? 'active' : ''}`} onClick={handleVideoClick}>
//           <ReactPlayer
//             ref={playerRef}
//             url={videoUrl}
//             playing={playing}
//             volume={volume}
//             muted={muted}
//             controls={false}
//             width="100%"
//             height="100%"
//             style={{ zIndex: activeElement === 'video' ? 100 : -1 }} // Video is in front when active
//             onReady={handlePlayerReady}
//           />
//         </div>

//         {/* Editor */}
//         <div className={`code-editor-container ${activeElement === 'editor' ? 'active' : ''}`}>
//           <Editor
//             code={code}
//             onChange={handleEditorChange}
//             editorDidMount={editorDidMount}
//           />
//           {/* Play button in editor view */}
//           {/* {activeElement === 'editor' && (
//             <IconButton
//               onClick={handlePlayFromEditor}
//               style={{
//                 position: 'absolute',
//                 bottom: '50px',
//                 left: '20px',
//                 zIndex: 100,
//               }}
//             >
//               <PlayArrowIcon fontSize="large" />
//             </IconButton>
//           )} */}
//         </div>

//         {/* Control buttons */}
//         <div className="controls">
//           {activeElement === 'video' ? (
//             <IconButton onClick={handlePlayerPlayPause} color="primary">
//               {playing ? <PauseIcon /> : <PlayArrowIcon />}
//             </IconButton>
//           ) : (
//             <IconButton
//               onClick={handlePlayFromEditor}
//               style={{
//                 position: 'absolute',
//                 bottom: '20px',
//                 left: '20px',
//                 zIndex: 100,
//               }}
//             >
//               <PlayArrowIcon fontSize="large" />
//             </IconButton>
//           )}
//           <IconButton onClick={increaseVolume} color="primary">
//             <VolumeUpIcon />
//           </IconButton>
//           <IconButton onClick={decreaseVolume} color="primary">
//             <VolumeDownIcon />
//           </IconButton>
//           <IconButton onClick={toggleMute} color="primary">
//             {muted ? <VolumeOffIcon /> : <VolumeMuteIcon />}
//           </IconButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tuto;
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Editor from './Editor';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

const Tuto = () => {
  const [activeElement, setActiveElement] = useState('video');
  const [code, setCode] = useState(`console.log('Hello, world!');`);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const playerRef = useRef(null);

  const videoUrl = 'Enregistrement.mp4';

  const handleVideoClick = () => {
    setActiveElement(prevElement => (prevElement === 'video' ? 'editor' : 'video'));
    setPlaying(false); // Stop video playback when switching to editor
  };

  const handleEditorChange = (newCode) => {
    setCode(newCode);
  };

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const togglePlaying = () => {
    setPlaying(prevPlaying => !prevPlaying);
  };

  const increaseVolume = () => {
    setVolume(prevVolume => Math.min(prevVolume + 0.1, 1));
  };

  const decreaseVolume = () => {
    setVolume(prevVolume => Math.max(prevVolume - 0.1, 0));
  };

  const toggleMute = () => {
    setMuted(prevMuted => !prevMuted);
  };

  // Function to handle player ready
  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  // Function to handle player play/pause
  const handlePlayerPlayPause = () => {
    setPlaying(prevPlaying => !prevPlaying);
  };

  // Function to handle volume change
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  // Function to handle mute/unmute
  const handleMuteToggle = () => {
    setMuted(prevMuted => !prevMuted);
  };

  // Function to handle play click in editor view
  const handlePlayFromEditor = () => {
    setActiveElement('video'); // Switch activeElement to video
    setPlaying(true); // Start playing the video
  };

  return (
    <div className="app-container">
      <div className="video-editor-container">

        <div className={`video-container ${activeElement === 'video' ? 'active' : ''}`} onClick={handleVideoClick}>
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            playing={playing}
            volume={volume}
            muted={muted}
            controls={false}
            width="100%"
            height="100%"
            style={{ zIndex: activeElement === 'video' ? 100 : -1 }} // Video is in front when active
            onReady={handlePlayerReady}
          />
        </div>

        {/* Editor */}
        <div className={`code-editor-container ${activeElement === 'editor' ? 'active' : ''}`}>
          <Editor
            code={code}
            onChange={handleEditorChange}
            editorDidMount={editorDidMount}
          />
        </div>

        <div className="controls" >
          {activeElement === 'video' ? (
            <IconButton onClick={handlePlayerPlayPause} style={{ color: '#6BCC60' }}>
              {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          ) : (
            <IconButton
              onClick={handlePlayFromEditor}
              style={{ color: '#6BCC60' }}
            >
              <PlayArrowIcon />
            </IconButton>
          )}
          <div className={` ${activeElement === 'editor' ? 'active_controls' : ''}`}> <IconButton onClick={increaseVolume} style={{ color: '#6BCC60' }}>
            <VolumeUpIcon />
          </IconButton>
            <IconButton onClick={decreaseVolume} style={{ color: '#6BCC60' }}>
              <VolumeDownIcon />
            </IconButton>
            <IconButton onClick={toggleMute} style={{ color: '#6BCC60' }}>
              {muted ? <VolumeOffIcon /> : <VolumeMuteIcon />}
            </IconButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tuto;
