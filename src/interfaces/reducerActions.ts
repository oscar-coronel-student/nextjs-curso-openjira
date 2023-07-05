export interface UIInitState {
    isSidebarOpen: boolean
}

export type UIReducerActions = 
    |{type: 'OpenSideBar'}
    |{type: 'CloseSideBar'}