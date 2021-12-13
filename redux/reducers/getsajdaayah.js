const INITIAL_STATE = {
    sajdaayaharbi:[],
    error:false,
    loading:false
}

const getsajdaayahdatareducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'GET_SAJDA_AYAH_DATA':
            return {...state,loading:true}
        case 'GET_SAJDA_AYAH_SUCCESS':
            return {...state,sajdaayaharbi:action.payload,loading:false}
        case 'GET_SAJDA_AYAH_ERROR':
            return {...state,loading:false,error:true}
        default :
        return {...state}
    }
}

export {getsajdaayahdatareducer}