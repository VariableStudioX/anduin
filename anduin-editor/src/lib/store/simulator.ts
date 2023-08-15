import { ReactElement, Key } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from './index';

export interface Protocol{
  header: Record<string, any>;
  body: ReactElement<any, string>[];
}

export interface Simulator{
  protocol: Protocol;
  selected: ReactElement<any, string> | null;
}

const initialState: Simulator = {
  protocol: {
    header: {},
    body: []
  },
  selected: null
};
const simulatorSlice = createSlice({
  name: 'simulator',
  initialState,
  reducers: {
    setSelected(state, action: PayloadAction<ReactElement<any, string>>){
      state.selected = action.payload;
    },
    addReactElement(state, action: PayloadAction<ReactElement<any, string>>){
      const element = action.payload;
      state.protocol.body.push(element);
      state.selected = element;
    },
    removeReactElement(state, action: PayloadAction<Key | null | undefined>){
      const { payload } = action;
      state.protocol.body = state.protocol.body.filter((element) => element.key !== payload);
      if (state.selected?.key === payload){
        state.selected = null;
      }
    },
    updateReactElement(state, action: PayloadAction<ReactElement<any, string>>){
      const { payload } = action;
      const index = state.protocol.body.findIndex((element) => element.key === payload.key);
      state.protocol.body[index] = payload;
      state.selected = payload;
    }
  }
});

export const { 
  addReactElement, 
  removeReactElement, 
  updateReactElement
} = simulatorSlice.actions

export const getProtocol = (state: ReduxState) => state.simulator.protocol;
export const getSelected = (state: ReduxState) => state.simulator.selected; 

export default simulatorSlice;
