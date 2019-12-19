const INITIAL_STATE = {
    data : '2019-11-11',
    nome : 'tESTE',
    email: 'tESTE@TESTE.COM',
    telefone:38987654 ,
    assunto:'TESTE'
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'ATUALIZA_DATA' : return {... state, data : action.value};
        case 'ATUALIZA_NOME' : return {... state, nome : action.value};
        case 'ATUALIZA_EMAIL' : return {... state, email : action.value};
        case 'ATUALIZA_TELEFONE' : return {... state, telefone : action.value};
        case 'ATUALIZA_ASSUNTO' : return {... state, assunto : action.value};
        default : return state
    }
}