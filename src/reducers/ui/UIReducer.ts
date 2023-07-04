import { UIInitState, UIReducerActions } from "@/src/interfaces"


export const uiInitState: UIInitState = {
    isSidebarOpen: false
}

export const uiReducer = ( state: UIInitState, action: UIReducerActions): UIInitState => {

    switch( action.type ){
        case 'Action':
            return {
                ...state
            }
        default:
            return state
    }
}