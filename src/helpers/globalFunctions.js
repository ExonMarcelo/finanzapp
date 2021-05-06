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

//export const formatNumber = (value) => value.toLocaleString();

export const formatAmount = (n, currency, decimal) => {
    n = parseFloat(n);
    currency = (currency === undefined) ? "" : currency;
    decimal = (decimal === undefined) ? 0 : decimal;

    return n.toFixed(decimal).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    }) + " " + currency;
};
