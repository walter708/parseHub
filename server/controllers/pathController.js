import { data } from "../data.js";

export const getPath = (req, res) => {
  let { mypath } = req.query;
  let obj = data[mypath];

  try {
    let childrenContent = [];
    if (obj?.children) {
      for (let elem of obj.children) {
        let val = data[elem];
        childrenContent.push({
          link: elem,
          name: val.name,
          isDirectory: val.isDirectory,
        });
      }
    } else {
      childrenContent = obj.name;
    }

    const files = {
      link: mypath,
      children: childrenContent,
      isDirectory: obj.isDirectory,
    };
    return res.json(files).status(200);
  } catch (error) {
    return res.json({ Error: "Internal Server Error" }).status(500);
  }
};
