export const showLoader = () => document.getElementById("btnShowBackdrop").click();

export const hideLoader = () => document.getElementById("btnHideBackdrop").click();

export const generateAmounts = (aData) =>{
    const {income, expenses} = aData;
    const totalIncome = income.reduce((sum, value) => ( sum + value.amount ), 0);
    const totalExpenses = expenses.reduce((sum, value) => ( sum + value.amount ), 0);
    const balance = totalIncome - totalExpenses;
    return {
        totalIncome, totalExpenses, balance
    }
};

export const formatNumber = (value) => value.toLocaleString();
