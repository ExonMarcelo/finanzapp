import {
    SHOW_SUCCESS_DIALOG,
    SHOW_ERROR_DIALOG
  } from '../actions/global';
  
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
    }
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SHOW_SUCCESS_DIALOG:
        return { ...state, dataSuccessDialog: action.payload };
      case SHOW_ERROR_DIALOG:
        return { ...state, dataErrorDialog: action.payload };
      default:
        return state;
    }
  }
  