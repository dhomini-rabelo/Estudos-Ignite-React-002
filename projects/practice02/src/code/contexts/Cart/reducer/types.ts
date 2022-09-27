/* eslint-disable */
export enum SaleActionsOptions {
  ADD_QUANTITY_FOR_PRODUCT = 'ADD_QUANTITY_FOR_PRODUCT',
  REMOVE_QUANTITY_FOR_PRODUCT = 'REMOVE_QUANTITY_FOR_PRODUCT',
  REMOVE_ALL_QUANTITY_FOR_PRODUCT = 'REMOVE_ALL_QUANTITY_FOR_PRODUCT',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
  SET_ADDRESS = 'SET_ADDRESS',
  CLEAR_SALE = 'CLEAR_SALE',
}
/* eslint-enable */

export interface SaleActionParamType {
  type: SaleActionsOptions
  payload?: any
}
