import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ReduxState, ReduxDispatch } from './index';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: ReduxState
  dispatch: ReduxDispatch
  rejectValue: string
}>();