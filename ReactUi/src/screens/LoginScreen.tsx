import * as React from "react";

import Grid from "@material-ui/core/Grid";

import {
  createStyles,
  withStyles,
  Theme,
  WithStyles
} from "@material-ui/core/styles";

import { LoginForm } from "../containers/LoginScreenContainers/LoginForm";

// Props
interface IProps extends WithStyles<typeof styles> {}

// Styles
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1
    }
  });

// Component
const LoginScreen = ({ classes }: IProps) => (
  <div>
    <Grid container={true} justify="center" alignItems="center">
      <Grid item={true} xs={6} sm={5} md={4} lg={3}>
        <LoginForm />
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(LoginScreen);
