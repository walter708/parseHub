import { Box, Typography } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
function Files({ fileContent, setCurrentPath, isDirectory }) {
  return isDirectory ? (
    <Box display="flex" flexDirection="column" p={4}>
      <h1>File Browser</h1>
      {fileContent.children.map((file) => (
        <Box
          ml={4}
          component="span"
          key={file.name}
          sx={{ cursor: "pointer", display: "flex", p: 2 }}
          onClick={() => setCurrentPath(file.link)}
        >
          {file.isDirectory ? (
            <FolderOutlinedIcon />
          ) : (
            <DocumentScannerOutlinedIcon />
          )}
          <Box component="span" pl={2}>
            {file.name}
          </Box>
        </Box>
      ))}
    </Box>
  ) : (
    <Typography sx={{ p: 2, mt: 4 }} variant="h4">
      This is {fileContent.children}
    </Typography>
  );
}

export default Files;
