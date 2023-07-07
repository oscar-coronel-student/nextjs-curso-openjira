//#region UI REDUCER
export interface UIInitState {
    isSidebarOpen: boolean
}

export type UIReducerActions = 
    |{type: 'OpenSideBar'}
    |{type: 'CloseSideBar'}
//#endregion


//#region ENTRY REDUCER
export type EntryStatus = 'pending'|'in-progress'|'finished'
export interface Entry {
    _id: string
    description: string
    createdAt: number
    status: EntryStatus
}
export interface EntryInitState {
    entries: Entry[]
}

export type EntryReducerActions = 
    |{type: 'AddEntry'}
//#endregion