export const withErrorHandling = async (fn) => {
  try {
    const result = await fn();
    return { data: result, error: null };
  } catch (error) {
    console.error("API Hatası:", error);
    return { data: null, error };
  }
};
