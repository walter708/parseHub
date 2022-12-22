The goal is to write a breadcrumb file-browser component in react. Write a set of react components that together, do all of the following:

- There should be a breadcrumb showing the current location in the directory structure (example: https://static.wingify.com/vwo/uploads/sites/3/2015/08/Location-Based-Breadcrumb-1024x349.jpg?tr=w-640)
- Each part in the breadcrumb should be separated and clickable. Clicking on a folder in the breadcrumb will take you to that folder.
- The main portion of the page should display the contents of the current directory, or "THIS IS FILE: {filename}" if the path is a file. Clicking on any of the files or folders in this portion of the page should take you to that file.
- There should be a simple http server with a single endpoint: GET /path/{mypath} should return the data about the given path. For directories, it should only include direct children, not the full subtree (otherwise it would not work on a real filesystem with millions of files).

The directory structure is below. This should only be available to the server, and not the client. The client may only access this structure via the /path call on your server. You may do any automated transformations you wish on this data structure to make it easier to work with, but the transformations should be automated (i.e.we should easily be able to replace it with another structure to test).
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
"projects": {
type: "dir",
children: {
mysupersecretproject: {
type: "dir",
children: {
mysupersecretfile: {
type: "file",
},
},
}
},
},
}
},
},
}
},
};

This is an engineering role, not a UX role, so the look-and-feel of the components will only be judged at 3% of the submission. i.e. It is very important to work correctly. If it looks good, it will be appreciated but not required.
