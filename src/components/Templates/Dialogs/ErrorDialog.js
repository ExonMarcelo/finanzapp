import React, { useState } from "react";
import { connect } from "react-redux";
import { showSuccessDialog, showErrorDialog } from "../../../redux/actions/global";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
/*import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";*/
import { Typography } from "@material-ui/core";

import ErrorIcon from "@material-ui/icons/ErrorOutlineOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ErrorDialog(props) {
  const { dataErrorDialog } = props;
  const { open, title, description, fnError } = dataErrorDialog;

  const closeDialog = () => {
    const { dispatch, dataErrorDialog } = props;
    const dataForDialog = {
      ...dataErrorDialog,
      open: false,
      fnError: () => {}
    }
    dispatch(showErrorDialog(dataForDialog));
    
    //execute callback
    fnError();
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      TransitionComponent={Transition}
      open={open}
      onClose={fnError}
      aria-labelledby="responsive-dialog-title"
    >
      {/*<DialogTitle id="responsive-dialog-title">{title}</DialogTitle>*/}
      <DialogContent style={{ textAlign: "center" }}>
        <ErrorIcon style={{ color: "#e86039", fontSize: "3rem" }} />
        <Typography variant="h6" style={{ color: "#e86039" }}>
          <b>{title}</b>
        </Typography>
        <DialogContentText style={{marginTop: "12px"}}><b>{description}</b></DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center", marginBottom:"10px" }}>
        <Button
          onClick={closeDialog}
          variant="contained"
          fullWidth
          style={{ backgroundColor: "#e86039", color:"#fff" }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect((state) => ({
  dataErrorDialog: state.global.dataErrorDialog,
}))(ErrorDialog);
