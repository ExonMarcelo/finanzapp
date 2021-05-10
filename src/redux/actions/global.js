export const SHOW_SUCCESS_DIALOG = 'SHOW_SUCCESS_DIALOG';
export const SHOW_ERROR_DIALOG = 'SHOW_ERROR_DIALOG';
export const CHANGE_BALANCE = 'CHANGE_BALANCE';
export const CHANGE_AMOUNT_INCOME = 'CHANGE_AMOUNT_INCOME';
export const CHANGE_AMOUNT_EXPENSES = 'CHANGE_AMOUNT_EXPENSES';
export const CHANGE_DATA_TEMP = 'CHANGE_DATA_TEMP';
//export const CHANGE_MOBILE_SIDEBAR_VISIBILITY = 'CHANGE_MOBILE_SIDEBAR_VISIBILITY';

export function showSuccessDialog(data) {
  return {
    type: SHOW_SUCCESS_DIALOG,
    payload: data
  };
}

export function showErrorDialog(data) {
  return {
    type: SHOW_ERROR_DIALOG,
    payload: data
  };
}

export function changeBalance(data) {
  return {
    type: CHANGE_BALANCE,
    payload: data
  };
}

export function changeAmountIncome(data) {
  return {
    type: CHANGE_AMOUNT_INCOME,
    payload: data
  };
}

export function changeAmountExpenses(data) {
  return {
    type: CHANGE_AMOUNT_EXPENSES,
    payload: data
  };
}

export function changeDataTemp(data) {
  return {
    type: CHANGE_DATA_TEMP,
    payload: data
  };
}

/*export function changeMobileSidebarVisibility() {
  return {
    type: CHANGE_MOBILE_SIDEBAR_VISIBILITY,
  };
}*/
