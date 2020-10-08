import * as types from './mutation-types';


export default {
    [types.AUTH_LOGIN] (state, payload){
        throw new Error ('AUTH_LOGIN mutation should be implemented')
    },
    [types.FETCH_ALL_TASKLIST] (state, payload){
        throw  new Error ('FETCH_ALL_TASKLIST mutation should be implemented');
    },
    [types.ADD_TASK] (state,payload){
        throw new Error('ADD_TASK mutation should be implemented');
    }
}