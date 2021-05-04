const dataTempMain = {
    typeIncome:[
      { id: 1, description: "Salario"},
      { id: 2, description: "Otros"},
    ],

    typeExpenses:[
      {id: 1, description: "Hogar"},
      {id: 2, description: "Servicios"},
      {id: 3, description: "Despensa"},
      {id: 4, description: "Otros"}
    ],

    income: [
    {
      id: 1,
      amount: 3000,
      description: "Salario Abril 2021",
      category: 1,//Salario(1), Otros(2),
      date: "30/04/2021 15:00"
    },
    {
      id: 2,
      amount: 1000,
      description: "Consultoría de Aplicaciones Móviles",
      category: 2,
      date: "03/05/2021 20:00"
    }
  ],

  expenses: [
    {
      id: 1,
      description: "Reparación tuberia",
      amount: 100,
      category: 1,//hogar(1), servicios(2), despensa(3), otros(4),
      date: "03/05/2021"
    },
    {
      id: 2,
      description: "Pago de Telefonía",
      amount: 100,
      category: 2,//hogar(1), servicios(2), despensa(3), otros(4),
      date: "03/05/2021"
    },
    {
      id: 3,
      description: "Compras en Tottus",
      amount: 182.30,
      category: 3,//hogar(1), servicios(2), despensa(3), otros(4),
      date: "03/05/2021"
    }
  ],
};

export default dataTempMain;
