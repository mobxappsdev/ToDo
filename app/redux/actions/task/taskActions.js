import {SET_TASK_LIST} from './types';

export const setTaskList = (tasksList)=>{
  return{
    type:SET_TASK_LIST,
    tasksList:tasksList
  }
}
