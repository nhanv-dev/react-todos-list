import * as types from '../constants/ActionTypes'
export const addNewTask = (task) => {
    return {
        type: types.PUSHED_ITEM,
        task
    }
}
export const updateTask = (task) => {
    return {
        type: types.UPDATE_ITEM,
        task
    }
}
export const removeTask = (task) => {
    return {
        type: types.REMOVE_ITEM,
        task
    }
}