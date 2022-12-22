import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  bread_crumb: {
    cursor: "pointer",
    padding: "2px 5px",
    "&:hover": {
      background: theme.palette.secondary.shade,
    },
  },
}));
