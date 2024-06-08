import httpRequest from "~/util/request";

/**
 * getHello
 * @description 
 * @return 
 */
const getHello = (params: any) => {
  return httpRequest.get('/hello', params);
};

export { getHello };

