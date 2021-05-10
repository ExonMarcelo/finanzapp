import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import { showSuccessDialog, showErrorDialog } from "../../../redux/actions/global";
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

  const { handleSubmit, control } = useForm();
  
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

  const handleSave = (type, data) => {
    if(type === "income"){
      showMessage({
        open: true,
        title:"¡Bien!",
        description: "La operación se ha realizado con éxito.",
        fnSuccess: () => {onClose();}
      })
    }else{
      alert("registrar gasto")
    }
  }

  const onSubmit = (data) => {
    const myData = {...data, date: formatDateDayToYear(data.date)};
    handleSave(type, data);
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
        Nuevo {type==="income"?"ingreso":"gasto"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Este movimiento se agregará a tus {type==="income"?"ingresos":"gastos"}
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
                label="Descripción"
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
            rules={{ required: 'Este campo es obligatorio.', maxLength: {value:100, message:"El texto no debe ser mayor a 100 caracteres."} }}
          />
          
          <Controller
            name="amount"
            control={control}
            defaultValue={amount}
            value={amount}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={styleInputs}
                label="Monto"
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
            rules={{ required: 'Este campo es obligatorio.', min: {value: 0, message: "El valor mínimo es 0"} }}
          />
          
          <Controller
            name="category"
            control={control}
            defaultValue={category}
            value={category}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={styleInputs}
                label="Categoría"
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
            rules={{ required: 'Este campo es obligatorio.'}}
          />

          <Controller
            name="date"
            control={control}
            defaultValue={date}
            value={date}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={styleInputs}
                label="Fecha"
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
            rules={{ required: 'Este campo es obligatorio.'}}
          />
          
          <Button type="submit" id="btnSubmit" style={{display:"none"}}>
            Signup
          </Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancelar</Button>
        <Button onClick={() => {doClick("btnSubmit")}} variant="contained" color="primary">
          Registar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect((state) => ({
  dataSuccessDialog: state.global.dataSuccessDialog,
  dataErrorDialog: state.global.dataErrorDialog,
}))(NewMovement);
