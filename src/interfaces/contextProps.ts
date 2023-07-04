import { Dispatch } from "react";
import { UIReducerActions } from "./reducerActions";


export interface UIContextProps {
    isSidebarOpen: boolean
    uiDispatch: Dispatch<UIReducerActions>
}