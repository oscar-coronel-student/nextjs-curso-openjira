export interface UIInitState {
    isSidebarOpen: boolean
}

export type UIReducerActions = 
    |{type: 'Action', payload: any};