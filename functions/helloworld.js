export const onRequest = (context) => {
  return new Response("/functions/helloworld.js");
};
