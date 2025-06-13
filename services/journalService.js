import axiosClient from "@/utils/axiosClient";
import baseService from "./baseService";

const endpoint = "/journals";

const journalService = {
  ...baseService(endpoint),

  // ✅ Benzer makaleler
  getSimilar: async (id, count = 3) => {
    const response = await axiosClient.get(`${endpoint}/similar/${id}?count=${count}`);
    return response.data;
  },

  // ✅ Slug ile veri çekme
  getBySlug: async (slug) => {
    const response = await axiosClient.get(`${endpoint}/blog/${slug}`);
    return response.data;
  },

  // ✅ Prev/Next navigation
  getNavigation: async (id) => {
    const response = await axiosClient.get(`${endpoint}/navigation/${id}`);
    return response.data;
  },
};

export default journalService;
