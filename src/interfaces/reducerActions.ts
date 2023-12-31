//#region UI REDUCER
export interface UIInitState {
    isSidebarOpen: boolean
    isAddingEntry: boolean
    isDragging: boolean
}

export type UIReducerActions = 
    |{type: 'OpenSideBar'}
    |{type: 'CloseSideBar'}
    |{type: 'SetIsAddingEntry', payload: boolean}
    |{type: 'SetIsDragging', payload: boolean}
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
    |{type: 'AddEntry', payload: Entry}
    |{type: 'EditEntry', payload: Entry}
    |{type: 'RefreshEntries', payload: Entry[]}
//#endregion