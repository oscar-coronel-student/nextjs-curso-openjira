export interface UIInitState {
    isSidebarOpen: boolean
}

export type UIReducerActions = 
    |{type: 'OpenSideBar'}
    |{type: 'CloseSideBar'}

export interface EntryInitState {
    entries: []
}

export type EntryReducerActions = 
    |{type: 'AddEntry'}