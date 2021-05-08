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
import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
//import Checkbox from '@material-ui/core/Checkbox';
//import Autocomplete from '@material-ui/lab/Autocomplete';//primero agragar @material-ui/lab luego el @material-ui/core
//import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
//import CheckBoxIcon from '@material-ui/icons/CheckBox';

//web services
//import wsServices from "../../../webServices/wsServices";

//import { showLoader, hideLoader } from "../../../helpers/globalFunctions";

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

  //const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleSubmit, control } = useForm();
  
  const [description, setDescription] = useState({key:"description", value:"", error: false, helperText:""});
  const [description2, setDescription2] = useState("");
  const [category, setCategory] = useState({key:"category", value:"", error: false, helperText:""});
  const [amount, setAmount] = useState({key:"amount", value:0.00, error: false, helperText:""});
  const [date, setDate] = useState({key:"date", value:"", error: false, helperText:""});

  const onSubmit = data => {
    console.log(data);
  }
  /*debugger;
  console.log("errors---");
  console.log(errors);*/
  

  function handleChange(e) {
    setDescription2(e.target.value);
    /*const keyName = e.target.name;
    switch (keyName) {
      case "description":
        setDescription({...description, value: e.target.value});
        break;
    
      case "category":
        setCategory({...category, value: e.target.value});
        break;
    
      case "amount":
        setAmount({...amount, value: e.target.value});
        break;
    
      case "date":
        setDate({...date, value: e.target.value});
        break;
    
      default:
        break;
    }*/
    //setName(e.target.value);
    /*setData({
      ...data,
      [e.target.name]: e.target.value,
    });*/
  }

  const showMessage = (dataForDialog) => {
    const { dispatch } = props;
    dispatch(showSuccessDialog(dataForDialog));
  };

  const showErrorMessage = (dataForDialog) => {
    const { dispatch } = props;
    dispatch(showErrorDialog(dataForDialog));
  };

  const validForm = (type) =>{
    let fields = [description, amount, category, date];

    let errorFields = 0;

    //clean validations
    for (let i = 0; i < fields.length; i++) {
      const element = fields[i];
      
      switch (element.key) {
        case "description":
          setDescription({...description, error: false, helperText: ""});
          break;
      
        case "category":
          setCategory({...category, error: false, helperText: ""});
          break;
      
        case "amount":
          setAmount({...amount, error: false, helperText: ""});
          break;
      
        case "date":
          setDate({...date, error: false, helperText: ""});
          break;
      
        default:
          break;
      }
    }

    //validate fields
    for (let i = 0; i < fields.length; i++) {
      const element = fields[i];
      if(element.value === ""){
        switch (element.key) {
            case "description":
                setDescription({...description, error: true, helperText: "campo vacío"});
                break;
        
            case "category":
                setCategory({...category, error: true, helperText: "campo vacío"});
                break;
        
            case "amount":
                setAmount({...amount, error: true, helperText: "campo vacío"});
                break;
        
            case "date":
                setDate({...date, error: true, helperText: "campo vacío"});
                break;
        
          default:
            break;
        }
        errorFields++;
      }
    }

    return (errorFields === 0)? true : false;
  };

  const handleSave = (type) => {
    if(type === "income"){
      if(!validForm(type)){
        return;
      }
      alert("registrar ingeso")
    }else{
      alert("registrar gasto")
    }
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

        {/*<form noValidate autoComplete="off">*/}
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
        name="description"
        control={control}
        defaultValue=""
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
        rules={{ required: 'El campo descripción es obligatorio.', maxLength: {value:3, message:"El texto no debe ser mayor a 3 caracteres."} }}
      />
          

          <TextField
            style={styleInputs}
            label="Monto"
            name="amount"
            variant="outlined"
            fullWidth
            type="number"
            value={amount.value}
            error={amount.error}
            helperText={amount.helperText}
            onChange={(e) => handleChange(e)}
          />

          
        {/*<TextField
            style={styleInputs}
            label="Categoría"
            name="category"
            variant="outlined"
            fullWidth
            value={category.value}
            error={category.error}
            helperText={category.helperText}
            onChange={(e) => handleChange(e)}
          />*/}

          <TextField
            style={styleInputs}
            id="category"
            name="category"
            select
            variant="outlined"
            fullWidth
            label="Categoría"
            value={category.value}
            error={category.error}
            helperText={category.helperText}
            onChange={(e) => handleChange(e)}
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
          
          <TextField
            id="date"
            label="Fecha"
            type="date"
            variant="outlined"
            defaultValue={date.value}
            error={date.error}
            helperText={date.helperText}
            onChange={(e) => handleChange(e)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            
          />

      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="First Name"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'First name required', maxLength: {value:2, message:"El texto no deb ser mayor a 2 caracteres"} }}
      />

        <Button type="submit" id="btnSubmit" style={{display:"none"}}>
          Signup
        </Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancelar</Button>
        <Button onClick={() => {document.getElementById("btnSubmit").click()}} variant="contained" color="primary">
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
