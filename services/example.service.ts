import { get, remove, post, put } from "./api.config";

const PRODUCTS_ROUTE = "/products";

export const createProduct = async (params: any) => {
  return await post(PRODUCTS_ROUTE, params);
};

export const getProducts = async () => {
  return await get(PRODUCTS_ROUTE);
};

export const updateProduct = async (productId: number, params: any) => {
  return await put(`${PRODUCTS_ROUTE}/${productId}`, params);
};

export const deleteProduct = async (productId: number) => {
  return await remove(`${PRODUCTS_ROUTE}/${productId}`);
};
