const Initial_State = {
    listenqurandata:[],
    error:false,
    loading:false
}

const listenquranreducer = (state=Initial_State,action) => {
    switch(action.type){
        case 'GET_LISTENQURAN_DATA':
            return {...state,loading:true}
        case 'GET_LISTENQURAN_DATA_SUCCESS':
            return {...state,listenqurandata:action.payload,loading:false}
        case 'GET_LISTENQURAN_DATA_ERROR':
            return {...state,error:true,loading:false}
        default:
            return {...state}
    }
}

export {listenquranreducer}