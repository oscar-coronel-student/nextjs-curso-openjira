import { Dispatch } from "react";
import { EntryReducerActions, UIReducerActions } from "./reducerActions";


export interface UIContextProps {
    isSidebarOpen: boolean
    uiDispatch: Dispatch<UIReducerActions>
}

export interface EntryContextProps {
    entries: [],
    entryDispatch: Dispatch<EntryReducerActions>
}