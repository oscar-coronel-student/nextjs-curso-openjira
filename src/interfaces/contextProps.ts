import { Dispatch } from "react";
import { Entry, EntryReducerActions, EntryStatus, UIReducerActions } from "./reducerActions";


export interface UIContextProps {
    isSidebarOpen: boolean
    uiDispatch: Dispatch<UIReducerActions>
}

export interface EntryContextProps {
    entries: Entry[],
    addEntry: (description: string, status: EntryStatus) => void
}