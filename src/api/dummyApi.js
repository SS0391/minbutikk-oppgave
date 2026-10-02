import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const fetchProducts = async ({ limit = 12, skip = 0, search = "", categorySlug = "" }) => {
  if (search) {
    const response = await api.get(`/products/search`, {
      params: { q: search, limit, skip },
    });
    return response.data;
  }

  if (categorySlug) {
    const response = await api.get(`/products/category/${categorySlug}`, {
      params: { limit, skip },
    });
    return response.data;
  }

  const response = await api.get(`/products`, {
    params: { limit, skip },
  });
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
