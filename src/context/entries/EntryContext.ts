import { createContext } from 'react';

import { EntryContextProps } from '@/src/interfaces';


export const EntryContext = createContext<EntryContextProps>({} as EntryContextProps);