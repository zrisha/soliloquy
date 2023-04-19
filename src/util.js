export function getSafe(fn, defaultVal=false) {
  try {
      return fn();
  } catch (e) {
      return defaultVal;
  }
}

export function isValidURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}

export function isObject(obj){
  return obj === Object(obj) && Object.prototype.toString.call(obj) !== '[object Array]'
}

export function isJson(item) {
  try {
      item = JSON.parse(item);
  } catch (e) {
      return false;
  }

  if (typeof item === "object" && item !== null) {
      return item;
  }

  return false;
}

export function getServerUrl(scriptUrl){
  if(!scriptUrl)
    return false

  let serverUrl = new URL(scriptUrl);

  //Sets serverUrl by default to origin used in script
  if(process.env.NODE_ENV !== "development"){
    const strIndex = serverUrl.pathname.indexOf("/code/ThinkAloud.js");
    const urlPath = strIndex > 0 ? serverUrl.pathname.substr(0, strIndex) : '';
    return serverUrl.origin + urlPath;
  }else{
    return serverUrl.origin;
  }
}