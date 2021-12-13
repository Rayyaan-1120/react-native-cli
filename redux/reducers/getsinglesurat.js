const INITIAL_STATE = {
    singlesuratAR:[],
    singlesuratEN:[],
    error:false,
    loading:false
}

const getsuratsingledatareducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'GET_SINGLESURAT_DATA':
            return {...state,loading:true}
        case 'GET_SINGLESURAT_DATA_SUCCESS':
            return {...state,singlesuratAR:action.payload,loading:false}
        case 'GET_SINGLESURAT_DATA_ERROR':
            return {...state,loading:false,error:true}
        default :
        return {...state}
    }
}

export {getsuratsingledatareducer}