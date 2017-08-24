import {
   
    MYSTR,

    RECEIVE_POSTS
} from '../actions';
 

let str={str:'222'}
const myApp = (state = {}, action) => {

    switch (action.type) {
       case RECEIVE_POSTS:
      
        return action.posts
        case MYSTR:
   
         str=action.str;

       console.log(action)
        return  {...state,str:str}

        default:
            return state;
    }
}
export default myApp;
