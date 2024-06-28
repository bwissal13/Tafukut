// import React, { useRef, useState, useEffect } from 'react';
// import { Box, HStack, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
// import { Editor, loader } from '@monaco-editor/react';
// import LanguageSelector from './LanguageSelector';
// import { CODE_SNIPPETS } from './constants';
// import Output from './Output';
// import '../../assets/styles/Tuto.css'; 
// import Nav from '../nav';

// const themes = ['vs-dark', 'light', 'Tafukut'];

// const Tafukut = {
//   base: 'vs-dark',
//   inherit: true,
//   rules: [
//     { token: 'comment', foreground: 'ffa500', fontStyle: 'italic' },
//     { token: 'keyword', foreground: '6BCC60' },
//     { token: 'identifier', foreground: 'ffffff' },
//   ],
//   colors: {
//     'editor.background': '#3C2407', 
//     'editor.foreground': '#FFFFFF',
//   },
// };

// const ThemeSelector = ({ theme, onSelect }) => (
//   <Menu>
//     <MenuButton as={Button} backgroundColor="#A96108" color="#FF8E00" mr={4} width="12rem">
//       Select Theme
//     </MenuButton>
//     <MenuList>
//       {themes.map((theme) => (
//         <MenuItem key={theme} onClick={() => onSelect(theme)}>
//           {theme}
//         </MenuItem>
//       ))}
//     </MenuList>
//   </Menu>
// );

// const EditorComponent = () => {
//   const editorRef = useRef();
//   const [value, setValue] = useState('');
//   const [language, setLanguage] = useState('javascript');
//   const [theme, setTheme] = useState('Tafukut');

//   useEffect(() => {
//     loader.init().then((monaco) => {
//       monaco.editor.defineTheme('Tafukut', Tafukut);
//     });
//   }, []);

//   const onMount = (editor) => {
//     editorRef.current = editor;
//     editor.focus();
//   };

//   const onSelectLanguage = (language) => {
//     setLanguage(language);
//     setValue(CODE_SNIPPETS[language]);
//   };

//   const onSelectTheme = (theme) => {
//     setTheme(theme);
//   };

//   return (
//     <Box>
//       <HStack spacing={4}>
//         <Box w="70%">
//           <Nav />
//           <HStack spacing={4} className="compiler_button">
//             <LanguageSelector language={language} onSelect={onSelectLanguage} />
//             <ThemeSelector theme={theme} onSelect={onSelectTheme} />
//           </HStack>
//           <Box borderRadius="15px" overflow="hidden" className="compiler" mt={4}>
//             <Editor
//               options={{
//                 minimap: {
//                   enabled: false,
//                 },
//               }}
//               width="70vw"
//               height="65vh"
//               theme={theme}
//               language={language}
//               defaultValue={CODE_SNIPPETS[language]}
//               onMount={onMount}
//               value={value}
//               onChange={(value) => setValue(value)}
//             />
//           </Box>
//         </Box>
//         <Output editorRef={editorRef} language={language} />
//       </HStack>
//     </Box>
//   );
// };

// export default EditorComponent;
import React, { useRef, useState, useEffect } from 'react';
import { Box, HStack, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { Editor, loader } from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from './constants';
import Output from './Output';
import '../../assets/styles/Tuto.css';
import Nav from '../nav';

const themes = ['vs-dark', 'light', 'Tafukut'];

const Tafukut = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'comment', foreground: 'ffa500', fontStyle: 'italic' },
    { token: 'keyword', foreground: '6BCC60' },
    { token: 'identifier', foreground: 'ffffff' },
  ],
  colors: {
    'editor.background': '#3C2407',
    'editor.foreground': '#FFFFFF',
  },
};

const ThemeSelector = ({ theme, onSelect }) => (
  <Menu>
    <MenuButton as={Button} backgroundColor="#A96108" color="#FF8E00" mr={4} width="12rem">
      Select Theme
    </MenuButton>
    <MenuList>
      {themes.map((theme) => (
        <MenuItem key={theme} onClick={() => onSelect(theme)}>
          {theme}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

const EditorComponent = () => {
  const editorRef = useRef();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('Tafukut');

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme('Tafukut', Tafukut);
    });
  }, []);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelectLanguage = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const onSelectTheme = (theme) => {
    setTheme(theme);
  };

  const onChange = (newValue) => {
    // Handle code change events here
    // Example: send newValue to backend API
    // Replace with your actual API endpoint
    fetch('http://your-backend-api/capture-code-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: Date.now(), // Example timestamp
        language: language,
        code: newValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response if needed
        console.log('Code event captured:', data);
      })
      .catch((error) => {
        console.error('Error capturing code event:', error);
      });

    // Update local state
    setValue(newValue);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="70%">
          <Nav />
          <HStack spacing={4} className="compiler_button">
            <LanguageSelector language={language} onSelect={onSelectLanguage} />
            <ThemeSelector theme={theme} onSelect={onSelectTheme} />
          </HStack>
          <Box borderRadius="15px" overflow="hidden" className="compiler" mt={4}>
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              width="70vw"
              height="65vh"
              theme={theme}
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={onChange} // Pass onChange function to handle code changes
            />
          </Box>
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default EditorComponent;
