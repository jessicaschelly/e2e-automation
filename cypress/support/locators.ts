const Locators = {
  CreateMovement: {
    type: '#tipo',
    transactionDate: '#data_transacao',
    paymentDate: '#data_pagamento',
    description: '#descricao',
    interested: '#interessado',
    value: '#valor',
    account: '#conta',
    save: {
      element: 'button',
      text: 'Salvar'
    },
    createMovement: {
      element: "a",
      text: "Criar Movimentação"
    }
  },
  Login: {
    email: "input[name='email']",
    password: "input[name='senha']",
    enter: {
      element: "button",
      text: "Entrar"
    },
  }
}

export default Locators