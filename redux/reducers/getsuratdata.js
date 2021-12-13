
const INITIAL_STATE = {
    suratdata:[],
    error:false,
    loading:false
}

const getsuratdatareducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'GET_SURAT_DATA':
            return {...state,loading:true}
        case 'GET_SURAT_DATA_SUCCESS':
            return {...state,suratdata:action.payload,loading:false}
        case 'GET_SURAT_DATA_ERROR':
            return {...state,loading:false,error:true}
        default :
        return {...state}
    }
}

export {getsuratdatareducer}