import axiosClient from '@/utils/axiosClient';

const baseService = (endpoint) => ({
  getAll: async () => {
    const response = await axiosClient.get(endpoint);
    return response.data;
  },

  get: async () => {
    const response = await axiosClient.get(endpoint);
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosClient.get(`${endpoint}/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosClient.post(endpoint, data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosClient.put(`${endpoint}/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosClient.delete(`${endpoint}/${id}`);
    return response.data;
  },
});

export default baseService;
