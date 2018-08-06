import {SET_TASK_LIST} from './types';

export const setTaskList = (tasksList)=>{
  console.log(JSON.parse(tasksList))
  return{
    type:SET_TASK_LIST,
    tasksList:tasksList
  }
}
