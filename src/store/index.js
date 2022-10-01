import {createStore} from 'redux'

const reducerFun = (state = {items:0},action)=>{
    if(action.type === "ADD"){
        return {items:state.items + 1}
    }

    return state;
};

const store = createStore(reducerFun); 

export default store;