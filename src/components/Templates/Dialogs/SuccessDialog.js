import React, { useState } from "react";
import { connect } from "react-redux";
import { showSuccessDialog } from "../../../redux/actions/global";
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

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SuccessDialog(props) {
  const { dataSuccessDialog } = props;
  const { open, title, description, fnSuccess } = dataSuccessDialog;

  const closeDialog = () => {
    const { dispatch, dataSuccessDialog } = props;
    const dataForDialog = {
      ...dataSuccessDialog,
      open: false,
      fnSuccess: () => {}
    }
    dispatch(showSuccessDialog(dataForDialog));
    
    //execute callback
    fnSuccess();
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      TransitionComponent={Transition}
      open={open}
      onClose={fnSuccess}
      aria-labelledby="responsive-dialog-title"
    >
      {/*<DialogTitle id="responsive-dialog-title">{title}</DialogTitle>*/}
      <DialogContent style={{ textAlign: "center" }}>
        <CheckCircleOutlineIcon style={{ color: "#5db35d", fontSize: "3rem" }} />
        <Typography variant="h6" style={{ color: "#5db35d" }}>
          <b>{title}</b>
        </Typography>
        <DialogContentText style={{marginTop: "12px"}}><b>{description}</b></DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center", marginBottom:"10px" }}>
        <Button
          onClick={closeDialog}
          variant="contained"
          fullWidth
          style={{ backgroundColor: "#5db35d", color:"#fff" }}
        >
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect((state) => ({
  dataSuccessDialog: state.global.dataSuccessDialog,
}))(SuccessDialog);
