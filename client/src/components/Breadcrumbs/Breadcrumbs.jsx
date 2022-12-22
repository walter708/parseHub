import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../themes";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import useStyles from "./styles";
const Breadcrumbs = ({ fileContent, setCurrentPath }) => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  let arrlinks = fileContent.link.split("/").slice(1);
  let arrLen = arrlinks.length;
  const handleClick = (elem) => {
    let index = arrlinks.indexOf(elem);
    let newArr = arrlinks.slice(0, index + 1);
    setCurrentPath("/" + newArr.join("/"));
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" backgroundColor={colors.primary[400]} p={1}>
        {arrlinks.map((elem, index) => (
          <Box
            key={`${elem}-${index}`}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              component="span"
              onClick={() => handleClick(elem)}
              className={classes.bread_crumb}
            >
              {index === arrLen - 1 ? (
                <i style={{ backgroundColor: `${colors.greenAccent[900]}` }}>
                  {elem}
                </i>
              ) : (
                elem
              )}{" "}
            </Box>
            {index < arrLen - 1 && <KeyboardDoubleArrowRightSharpIcon />}
          </Box>
        ))}
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Breadcrumbs;
