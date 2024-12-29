export const logger = (message: string, params?: unknown) => {
  if (params) {
    console.log(message, params);
  } else {
    console.log(message);
  }
};
