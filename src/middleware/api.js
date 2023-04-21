//Stores references to callbacks
const callbacks = {}

//Initalize window object
window.soliloquy = {};

//Attaches callback to object for reference
window.soliloquy.on = (action, callback) => callbacks[action] = callback;
window.soliloquy.onComplete = (callback) => callbacks["onComplete"] = callback;

export const listeners = store => next => action => {
  if(!action) return;
  switch(action.type) {
    case "END_THINKALOUD":
      if(callbacks["onComplete"]){
        //Custom logic here
        callbacks["onComplete"]({}, store.getState());
      }
      break;
    default:
      if(callbacks[action.type]) callbacks[action.type](action, store.getState());
      break;
  }

  if(callbacks["ALL"]) callbacks["ALL"](action, store.getState());

  let result = next(action)
  return result
}