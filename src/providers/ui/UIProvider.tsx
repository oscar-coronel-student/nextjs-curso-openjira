import { useReducer } from 'react';

import { UIContext } from '../../context/ui';
import { uiInitState, uiReducer } from '@/src/reducers/ui';


interface Props {
    children: JSX.Element|JSX.Element[]
}

export const UIProvider = ({ children }: Props) => {

    const [uiState, uiDispatch] = useReducer(uiReducer, uiInitState);

    return <>
        <UIContext.Provider
            value={{
                ...uiState,
                uiDispatch
            }}
        >
            { children }
        </UIContext.Provider>
    </>
}