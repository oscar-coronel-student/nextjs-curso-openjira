import { UIReducerActions } from "../interfaces";


export const OpenSideBar = (): UIReducerActions => {
    return {
        type: 'OpenSideBar'
    }
}

export const CloseSideBar = (): UIReducerActions => {
    return {
        type: 'CloseSideBar'
    }
}

export const SetIsAddingEntry = (payload: boolean): UIReducerActions => {
    return {
        type: 'SetIsAddingEntry',
        payload
    }
}

export const SetIsDragging = (payload: boolean): UIReducerActions => {
    return {
        type: 'SetIsDragging',
        payload
    }
}