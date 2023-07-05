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