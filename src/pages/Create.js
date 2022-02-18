import SendIcon from "@material-ui/icons/Send";
import { Container, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    backgroundColor: "orange",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
});

export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      {/* <Typography variant="h1" color="primary" align="center">
        Create a new note
      </Typography> */}
      {/* <Typography variant="h1" color="secondary" align="center">
        Create a new note
      </Typography>
      <Typography noWrap>
        lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
        sit amet lorem ipsum dolor sit amet lorem ips lorem ipsum dolor sit amet
        lorem lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ips lorem
        ipsum dolor sit amet lorem lorem ipsum lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
        amet lorem ips lorem ipsum dolor sit amet lorem lorem ipsum
      </Typography>
      <Typography variant="caption">
        Lorem ipsum dolor sit amet lorem ipsum d
      </Typography> */}

      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>

      {/* <Button type="submit" color="secondary" variant="outlined">
        Create
      </Button>

      <ButtonGroup color="primary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        disableElevation
        className={classes.btn}
        endIcon={<SendIcon fontSize="small" />}
        onClick={(e) => console.log(e.target)}
      >
        Create
      </Button>
      <br />
      {/* <AdbIcon color="primary" fontSize="large" /> */}
    </Container>
  );
}
