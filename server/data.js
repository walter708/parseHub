let root = {
  type: "dir",
  children: {
    home: {
      type: "dir",
      children: {
        myname: {
          type: "dir",
          children: {
            "filea.txt": {
              type: "file",
            },
            "fileb.txt": {
              type: "file",
            },
            projects: {
              type: "dir",
              children: {
                mysupersecretproject: {
                  type: "dir",
                  children: {
                    mysupersecretfile: {
                      type: "file",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const flatten = (obj) => {
  let flattenedObj = {};

  const dfs = (obj, key, parent) => {
    if (!obj.hasOwnProperty("children")) {
      flattenedObj[`${parent}/${key}`] = {
        ...obj,
        name: key,
        isDirectory: false,
      };
      return;
    }
    let childObj = obj["children"];
    let childKeys = Object.keys(childObj);
    const newChildKeys = childKeys.map((k) => `${parent}/${key}/${k}`);
    flattenedObj[`${parent}/${key}`] = {
      ...obj,
      children: [...newChildKeys],
      name: key,
      isDirectory: true,
    };
    for (let elem in childObj) {
      dfs(childObj[elem], elem, `${parent}/${key}`);
    }
  };

  dfs(obj, "root", "");
  return flattenedObj;
};

let data = flatten(root);

export { data };
