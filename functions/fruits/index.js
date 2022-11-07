export const onRequest = (context) => {
  return new Response("/functions/fruits/index.js");
};
