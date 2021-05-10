import {
    SHOW_SUCCESS_DIALOG,
    SHOW_ERROR_DIALOG,
    CHANGE_BALANCE,
    CHANGE_AMOUNT_INCOME,
    CHANGE_AMOUNT_EXPENSES,
    CHANGE_DATA_TEMP
  } from '../actions/global';

  //import temporary data
import dataTempMain  from "../../helpers/dataMain";
//import {generateAmounts}  from "../../helpers/globalFunctions";

//const {balance, totalIncome, totalExpenses} = generateAmounts(dataTempMain);


  const initialState = {
    dataSuccessDialog:{
        open: false,
        title:"¡Bien!",
        description: "La operación se ha realizado con éxito.",
        fnSuccess: () => {}
    },
    dataErrorDialog:{
        open: false,
        title:"¡Oops!",
        description: "Ocurrio un error inesperado.",
        fnError: () => {}
    },
    amountBalance: 0,
    amountIncome: 0,
    amountExpenses: 0,
    dataTemp: dataTempMain
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SHOW_SUCCESS_DIALOG:
        return { ...state, dataSuccessDialog: action.payload };
      case SHOW_ERROR_DIALOG:
        return { ...state, dataErrorDialog: action.payload };
      case CHANGE_BALANCE:
        return { ...state, amountBalance: action.payload };
      case CHANGE_AMOUNT_INCOME:
        return { ...state, amountIncome: action.payload };
      case CHANGE_AMOUNT_EXPENSES:
        return { ...state, amountExpenses: action.payload };
      case CHANGE_DATA_TEMP:
        return { ...state, dataTemp: action.payload };
      default:
        return state;
    }
  }
  