export const SHOW_SUCCESS_DIALOG = 'SHOW_SUCCESS_DIALOG';
export const SHOW_ERROR_DIALOG = 'SHOW_ERROR_DIALOG';
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

/*export function changeMobileSidebarVisibility() {
  return {
    type: CHANGE_MOBILE_SIDEBAR_VISIBILITY,
  };
}*/
