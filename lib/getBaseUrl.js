export const getBaseUrl = () => {
  const isDev = process.env.NODE_ENV === "development";

  return isDev ? "http://localhost:3000" : "https://sielmarketing.com";
};
