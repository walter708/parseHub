import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Files from "../../components/Files/Files";
import CircularProgress from "@mui/material/CircularProgress";

function FileBrowser() {
  const [fileContent, setFileContent] = useState(null);
  const [currentPath, setCurrentPath] = useState("/root");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `/path?mypath=${currentPath}`
      );
      setFileContent(result.data);
    }
    fetchData();
  }, [currentPath]);

  return fileContent ? (
    <>
      <Breadcrumbs fileContent={fileContent} setCurrentPath={setCurrentPath} />
      <Files
        fileContent={fileContent}
        setCurrentPath={setCurrentPath}
        isDirectory={fileContent.isDirectory}
      />
    </>
  ) : (
    <CircularProgress />
  );
}

export default FileBrowser;
