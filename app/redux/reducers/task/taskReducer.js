import {SET_TASK_LIST} from '../../actions/task/types';

const init ={
  tasksList:[]
}

export default(state=init, action)=>{
  switch(action.type){
    case SET_TASK_LIST:
      return{...state, tasksList:action.tasksList};
    default:
        return state;
  }
}
