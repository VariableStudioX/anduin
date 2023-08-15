import { ReactElement } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from './index';

export interface Protocol{
  header: Record<string, any>;
  body: ReactElement<any, string>[];
}

const initialState: Protocol = {
  header: {},
  body: []
};
const protocolSlice = createSlice({
  name: 'protocol',
  initialState,
  reducers: {
    addReactElement(state, action: PayloadAction<ReactElement<any, string>>){
      state.body.push(action.payload);
    },
    removeReactElement(){

    },
    updateReactElement(){

    }
  }
});

export const { 
  addReactElement, 
  removeReactElement, 
  updateReactElement
} = protocolSlice.actions

export const getProtocol = (state: ReduxState) => state.protocol; 

export default protocolSlice;
