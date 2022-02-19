import * as types from '../constants/ActionTypes'

const initialState = [
    { id: 1, title: 'Read a book, do something make me feel comfortable', status: 'to-do' },
    { id: 2, title: 'Listen to music', status: 'in-progress' },
    { id: 3, title: 'Take money', status: 'to-do' },
    { id: 4, title: 'Save time', status: 'done' },
    { id: 5, title: 'Do nothing', status: 'in-progress' },
    { id: 6, title: 'Learn english', status: 'to-do' },
]

const taskReducer = (state = initialState, action) => {
    let newState = [...state]
    switch (action.type) {
        case types.PUSHED_ITEM:
            action.task.id = state.length + 1
            newState.push(action.task)
            return newState
        case types.UPDATE_ITEM:
            const index = newState.findIndex(task => task.id === action.task.id)
            newState[index] = action.task
            return newState
        case types.REMOVE_ITEM:
            newState = newState.filter(task => task.id !== action.task.id)
            return newState
        default: return newState

    }
}
export default taskReducer