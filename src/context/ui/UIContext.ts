import { createContext } from 'react';

import { UIContextProps } from '@/src/interfaces';


export const UIContext = createContext<UIContextProps>({} as UIContextProps);