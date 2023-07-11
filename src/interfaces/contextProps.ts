import { Entry, EntryStatus, UIInitState } from "./reducerActions";


export interface UIContextProps extends UIInitState {
    openSideBar: () => void
    closeSideBar: () => void
    setIsAddingEntry: (isAdding: boolean) => void
}

export interface EntryContextProps {
    entries: Entry[],
    addEntry: (description: string, status: EntryStatus) => void
}