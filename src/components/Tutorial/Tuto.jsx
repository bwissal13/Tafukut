
// import React, { useState, useRef, useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import Editor from './Editor';
// import { IconButton } from '@mui/material';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
// import axios from 'axios'; 
// const Tuto = () => {
//   const [activeElement, setActiveElement] = useState('video');
//   const [code, setCode] = useState(`console.log('Hello, world!');`);
//   const [playing, setPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.8);
//   const [muted, setMuted] = useState(false);
//   const playerRef = useRef(null);

//   const videoUrl = 'Enregistrement.mp4';

//   // Handle progress function
//   const handleProgress = ({ playedSeconds }) => {
//     // Implement logic to fetch code events from backend based on playedSeconds
//     fetchCodeEvents(playedSeconds);
//   };

//   useEffect(() => {
//     // Cleanup if needed
//     return () => {
//       // Cleanup logic here if necessary
//     };
//   }, []);

//   const fetchCodeEvents = (currentTime) => {
//     // Example: Fetch code events from backend based on currentTime
//     axios.get(`/api/code-events?timestamp=${currentTime}`)
//       .then(response => {
//         const { code } = response.data;
//         setCode(code); // Update code in editor based on fetched data
//       })
//       .catch(error => {
//         console.error('Error fetching code events:', error);
//       });
//   };

//   const handleVideoClick = () => {
//     setActiveElement(prevElement => (prevElement === 'video' ? 'editor' : 'video'));
//     setPlaying(false); // Stop video playback when switching to editor
//   };

//   const handleEditorChange = (newCode) => {
//     setCode(newCode);

//     // Capture code events and send to backend
//     captureCodeEvent(newCode);
//   };

//   const captureCodeEvent = (code) => {
//     // Example: Capture code event and send to backend
//     axios.post('/api/capture-code-event', { code })
//       .then(response => {
//         console.log('Code event captured successfully:', response.data);
//       })
//       .catch(error => {
//         console.error('Error capturing code event:', error);
//       });
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

//   // Function to handle play click in editor view
//   const handlePlayFromEditor = () => {
//     setActiveElement('video'); // Switch activeElement to video
//     setPlaying(true); // Start playing the video
//   };

//   return (
//     <div className="app-container">
//       <div className="video-editor-container">

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
//             onProgress={handleProgress} // Use onProgress instead of addEventListener
//             onReady={handlePlayerReady}
//           />
//         </div>

//         {/* Editor */}
//         <div className={`code-editor-container ${activeElement === 'editor' ? 'active' : ''}`}>
//           <Editor
//             code={code}
//             onChange={handleEditorChange}
//           />
//         </div>

//         <div className="controls">
//           {activeElement === 'video' ? (
//             <IconButton onClick={togglePlaying} style={{ color: '#6BCC60' }}>
//               {playing ? <PauseIcon /> : <PlayArrowIcon />}
//             </IconButton>
//           ) : (
//             <IconButton onClick={handlePlayFromEditor} style={{ color: '#6BCC60' }}>
//               <PlayArrowIcon />
//             </IconButton>
//           )}
//           <IconButton onClick={increaseVolume} style={{ color: '#6BCC60' }}>
//             <VolumeUpIcon />
//           </IconButton>
//           <IconButton onClick={decreaseVolume} style={{ color: '#6BCC60' }}>
//             <VolumeDownIcon />
//           </IconButton>
//           <IconButton onClick={toggleMute} style={{ color: '#6BCC60' }}>
//             {muted ? <VolumeOffIcon /> : <VolumeMuteIcon />}
//           </IconButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tuto;
import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Editor from './Editor';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import axios from 'axios'; 

const Tuto = () => {
  const [activeElement, setActiveElement] = useState('video');
  const [code, setCode] = useState(`console.log('Hello, world!');`);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const playerRef = useRef(null);

  const videoUrl = '/Enregistrement.mp4';

  const handleProgress = ({ playedSeconds }) => {
    fetchCodeEvents(playedSeconds);
  };

  useEffect(() => {
    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  const fetchCodeEvents = (currentTime) => {
    axios.get(`/api/code-events?timestamp=${currentTime}`)
      .then(response => {
        const { code } = response.data;
        setCode(code);
      })
      .catch(error => {
        console.error('Error fetching code events:', error);
      });
  };

  const handleVideoClick = () => {
    setActiveElement(prevElement => (prevElement === 'video' ? 'editor' : 'video'));
    setPlaying(false);
  };

  const handleEditorChange = (newCode) => {
    setCode(newCode);
    captureCodeEvent(newCode);
  };

  const captureCodeEvent = (code) => {
    axios.post('/api/capture-code-event', { code })
      .then(response => {
        console.log('Code event captured successfully:', response.data);
      })
      .catch(error => {
        console.error('Error capturing code event:', error);
      });
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

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  const handlePlayFromEditor = () => {
    setActiveElement('video');
    setPlaying(true);
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
            onProgress={handleProgress}
            onReady={handlePlayerReady}
          />
        </div>
        <div className={`code-editor-container ${activeElement === 'editor' ? 'active' : ''}`}>
          <Editor
            code={code}
            onChange={handleEditorChange}
          />
        </div>
        <div className="controls">
          {activeElement === 'video' ? (
            <IconButton onClick={togglePlaying} style={{ color: '#6BCC60' }}>
              {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          ) : (
            <IconButton onClick={handlePlayFromEditor} style={{ color: '#6BCC60' }}>
              <PlayArrowIcon />
            </IconButton>
          )}
          <IconButton onClick={increaseVolume} style={{ color: '#6BCC60' }}>
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
  );
};

export default Tuto;
