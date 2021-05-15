import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import { changeDataTemp, showSuccessDialog, showErrorDialog } from "../../../redux/actions/global";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {MenuItem} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
//import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

//web services
//import wsServices from "../../../webServices/wsServices";

//import translations
import {useTranslation} from "react-i18next";

//global functions
import { formatDateDayToYear, doClick } from "../../../helpers/globalFunctions";

//import temporary data
import dataTempMain  from "../../../helpers/dataMain";

const styleInputs = {
  marginTop: "8px",
  marginBottom: "8px",
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NewMovement(props) {
  const { open, onClose, type } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const { handleSubmit, control, reset } = useForm();

  const { t } = useTranslation("global");
  
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const showMessage = (dataForDialog) => {
    const { dispatch } = props;
    dispatch(showSuccessDialog(dataForDialog));
  };

  const showErrorMessage = (dataForDialog) => {
    const { dispatch } = props;
    dispatch(showErrorDialog(dataForDialog));
  };

  const handleChangeDataTemp = (data) => {
    const { dispatch } = props;
    dispatch(changeDataTemp(data));
  };

  const handleSave = (data, e) => {
    const {dataTemp, type} = props;
    showMessage({
      open: true,
      title: t("newMovementDialog.titleMessageSuccess"),
      description: (type === "income")? t("newMovementDialog.messageSuccessIncome") : t("newMovementDialog.messageSuccessExpense"),
      fnSuccess: () => {
        const newMovement = dataTemp[type];
        newMovement.push({
          id: generateID(dataTemp[type]), 
          description: data.description, 
          amount: parseInt(data.amount), 
          date: data.date
        });
        const myData = {...dataTemp, [type]: newMovement};
        handleChangeDataTemp(myData);

        handleClose();
        
      }
    });
  }

  const handleClose = () => {
    onClose();
    //clear form
    clearForm();
  }

  const clearForm = () =>{
    reset({ 
      description: "",
      amount: "",
      category: "",
      date: "",
    });
  }

  const generateID = (data) => {
    if(data.length === 0){
      return 1;
    }
    const sorted = data.sort((a, b) => a.id - b.id);
    const lastID = sorted[sorted.length - 1].id;
    return  lastID + 1;
  }

  const onSubmit = (data, e) => {
    const myData = {...data, date: formatDateDayToYear(data.date)};
    handleSave(myData, e);
    //onClose();
  }


  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      TransitionComponent={Transition}
      keepMounted
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {type==="income"? t("newMovementDialog.titleIncome") : t("newMovementDialog.titleExpense")}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {type==="income"? t("newMovementDialog.descriptionIncome") : t("newMovementDialog.descriptionExpense")}
        </DialogContentText>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="description"
            control={control}
            defaultValue={description}
            value={description}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={styleInputs}
                label={t("newMovementDialog.labelDescription")}
                name="description"
                variant="outlined"
                autoFocus
                fullWidth
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: t("fieldValidations.required"), maxLength: {value:100, message: t("fieldValidations.maxLength", {cant: 100})} }}
          />
          
          <Controller
            name="amount"
            control={control}
            defaultValue={amount}
            value={amount}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={styleInputs}
                label={t("newMovementDialog.labelAmount")}
                name="amount"
                variant="outlined"
                fullWidth
                type="number"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: t("fieldValidations.required"), min: {value: 0, message: t("fieldValidations.maxLength", {cant: 0})} }}
          />
          
          <Controller
            name="category"
            control={control}
            defaultValue={category}
            value={category}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={styleInputs}
                label={t("newMovementDialog.labelCategory")}
                name="category"
                variant="outlined"
                fullWidth
                select
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              >
                <MenuItem value="">
                  <em>Selecciona una opción</em>
                </MenuItem>
                {
                  type==="income"?
                  (
                    dataTempMain.typeIncome.map((item) => <MenuItem key={item.id} value={item.id}>{item.description}</MenuItem>)
                  ):(
                    dataTempMain.typeExpenses.map((item) => <MenuItem key={item.id} value={item.id}>{item.description}</MenuItem>)
                  )
                }
              </TextField>
            )}
            rules={{ required: t("fieldValidations.required")}}
          />

          <Controller
            name="date"
            control={control}
            defaultValue={date}
            value={date}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={styleInputs}
                label={t("newMovementDialog.labelDate")}
                name="date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: t("fieldValidations.required")}}
          />
          
          <Button type="submit" id="btnSubmit" style={{display:"none"}}>
            Signup
          </Button>
          {/*<input type="button" onClick={() => reset({ description: "bill" })} value="reset"/>*/}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t("globalButtons.cancel")}</Button>
        <Button onClick={() => {doClick("btnSubmit")}} variant="contained" color="primary">
          {t("globalButtons.register")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect((state) => ({
  dataSuccessDialog: state.global.dataSuccessDialog,
  dataErrorDialog: state.global.dataErrorDialog,
  dataTemp: state.global.dataTemp
}))(NewMovement);
