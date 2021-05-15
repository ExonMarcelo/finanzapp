import React, { useState } from "react";
import { connect } from "react-redux";
import { showConfirmDialog } from "../../../redux/actions/global";
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

//import translations
import {useTranslation} from "react-i18next";

import AlertIcon from '@material-ui/icons/ReportProblem';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ConfirmDialog(props) {
  const { dataConfirmDialog } = props;
  const { open, title, description, fnOK } = dataConfirmDialog;
  const {t} = useTranslation("global");

  const closeDialog = () => {
    const { dispatch, dataConfirmDialog } = props;
    const dataForDialog = {
      ...dataConfirmDialog,
      open: false,
      fnOK: () => {}
    }
    dispatch(showConfirmDialog(dataForDialog));
    
    //execute callback
    fnOK();
  };

  const closeDialogCancel = () => {
    const { dispatch, dataConfirmDialog } = props;
    const dataForDialog = {
      ...dataConfirmDialog,
      open: false,
      fnOK: () => {}
    }
    dispatch(showConfirmDialog(dataForDialog));
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      TransitionComponent={Transition}
      open={open}
      onClose={fnOK}
      aria-labelledby="responsive-dialog-title"
    >
      {/*<DialogTitle id="responsive-dialog-title">{title}</DialogTitle>*/}
      <DialogContent style={{ textAlign: "center" }}>
        <AlertIcon style={{ color: "#ffc41b", fontSize: "3rem" }} />
        <Typography variant="h6" style={{ color: "#ffc41b" }}>
          <b>{title}</b>
        </Typography>
        <DialogContentText style={{marginTop: "12px"}}><b>{description}</b></DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center", marginBottom:"10px" }}>
        <Button
          onClick={closeDialogCancel}
          variant="contained"
          color="default"
        >
          {t("globalButtons.cancel")}
        </Button>
        <Button
          onClick={closeDialog}
          variant="contained"
          style={{ backgroundColor: "#ffc41b", color:"#fff" }}
        >
          {t("globalButtons.continue")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect((state) => ({
  dataConfirmDialog: state.global.dataConfirmDialog,
}))(ConfirmDialog);
