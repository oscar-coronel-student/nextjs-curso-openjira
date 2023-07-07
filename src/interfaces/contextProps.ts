import { Dispatch } from "react";
import { Entry, EntryReducerActions, UIReducerActions } from "./reducerActions";


export interface UIContextProps {
    isSidebarOpen: boolean
    uiDispatch: Dispatch<UIReducerActions>
}

export interface EntryContextProps {
    entries: Entry[],
    entryDispatch: Dispatch<EntryReducerActions>
}