import {combineReducers} from 'redux'
import { getsuratdatareducer } from '../reducers/getsuratdata'
import {getsuratsingledatareducer} from '../reducers/getsinglesurat'
import {getsajdaayahdatareducer} from '../reducers/getsajdaayah'
import { listenquranreducer } from '../reducers/listenquranreducer'

export const rootreducer = combineReducers({
    getsuratdatareducer,
    getsuratsingledatareducer,
    getsajdaayahdatareducer,
    listenquranreducer
})

