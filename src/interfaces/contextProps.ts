import { Entry, EntryStatus, UIInitState } from "./reducerActions";


export interface UIContextProps extends UIInitState {
    openSideBar: () => void
    closeSideBar: () => void
    setIsAddingEntry: (isAdding: boolean) => void
    setIsDragging: (isDragging: boolean) => void
}

export interface EntryContextProps {
    entries: Entry[],
    addEntry: (description: string, status: EntryStatus) => void
    editEntry: (entryUpdated: Entry) => void
}