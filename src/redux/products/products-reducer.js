import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './products-actions';

import {
  fetchProducts,
  deleteProduct,
  addProduct,
} from './products-operations';

const items = createReducer([], {
  [fetchProducts.fulfilled]: (_, { payload }) => payload,
  [addProduct.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteProduct.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchProducts.pending]: () => true,
  [fetchProducts.fulfilled]: () => false,
  [fetchProducts.rejected]: () => false,

  [addProduct.pending]: () => true,
  [addProduct.fulfilled]: () => false,
  [addProduct.rejected]: () => false,

  [deleteProduct.pending]: () => true,
  [deleteProduct.fulfilled]: () => false,
  [deleteProduct.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchProducts.rejected]: (_, { payload }) => payload,
  [fetchProducts.fulfilled]: () => null,

  [addProduct.rejected]: (_, { payload }) => payload,
  [addProduct.fulfilled]: () => null,

  [deleteProduct.rejected]: (_, { payload }) => payload,
  [deleteProduct.fulfilled]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});