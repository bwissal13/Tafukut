
import { Box,Button,Menu,MenuButton,MenuItem,MenuList,Text,} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "#ffffff";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box >
      <Menu isLazy>
        <MenuButton  width="12rem" as={Button}>{language}</MenuButton>
        <MenuList bg="#ffffff">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "#A96108" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "rgba(169, 97, 8, 0.3)",
            
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default LanguageSelector;