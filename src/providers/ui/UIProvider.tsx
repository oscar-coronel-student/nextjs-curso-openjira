import { useReducer } from 'react';

import { UIContext } from '../../context/ui';
import { uiInitState, uiReducer } from '@/src/reducers/ui';
import { CloseSideBar, OpenSideBar, SetIsAddingEntry } from '@/src/actions';


interface Props {
    children: JSX.Element|JSX.Element[]
}

export const UIProvider = ({ children }: Props) => {

    const [uiState, uiDispatch] = useReducer(uiReducer, uiInitState);

    const openSideBar = () => uiDispatch( OpenSideBar() )
    const closeSideBar = () => uiDispatch( CloseSideBar() )

    const setIsAddingEntry = (isAdding: boolean) => uiDispatch( SetIsAddingEntry(isAdding) );
    
    return <>
        <UIContext.Provider
            value={{
                ...uiState,
                openSideBar,
                closeSideBar,
                setIsAddingEntry
            }}
        >
            { children }
        </UIContext.Provider>
    </>
}