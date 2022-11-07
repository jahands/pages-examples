export const onRequest = (context) => {
  return new Response("/functions/index.js");
};
