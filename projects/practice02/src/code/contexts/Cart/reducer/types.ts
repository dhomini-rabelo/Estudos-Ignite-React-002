/* eslint-disable */
export enum SaleActionsOptions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  ADD_QUANTITY_FOR_PRODUCT = 'ADD_QUANTITY_FOR_PRODUCT',
}
/* eslint-enable */

export interface SaleActionParamType {
  type: SaleActionsOptions
  payload?: any
}
