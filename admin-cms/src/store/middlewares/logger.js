const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", storeAPI.getState());
  return result;
};

export default loggerMiddleware;
