const production = {
  domain: "https://www.sielmarketing.com",
};

const development = {
  domain: "https://www.sielmarketing.com",
};

export const config = process.env.NODE_ENV === "development" ? development : production;
