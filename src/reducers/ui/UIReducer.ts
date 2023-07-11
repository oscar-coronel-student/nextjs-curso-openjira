import { UIInitState, UIReducerActions } from '@/src/interfaces';


export const uiInitState: UIInitState = {
    isSidebarOpen: false,
    isAddingEntry: false
}

export const uiReducer = ( state: UIInitState, action: UIReducerActions): UIInitState => {

    switch( action.type ){
        case 'OpenSideBar':
            return {
                ...state,
                isSidebarOpen: true
            }
        case 'CloseSideBar':
            return {
                ...state,
                isSidebarOpen: false
            }
        case 'SetIsAddingEntry':
            return {
                ...state,
                isAddingEntry: action.payload
            }
        default:
            return state
    }
}