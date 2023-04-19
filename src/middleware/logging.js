//logging middleware
import axios from 'axios';
import statements from '../exampleXAPI.json';

//This is an example of how to add logging (in XAPI format) as middleware.
export const logging = store => next => action => {
  if(!action) return;

  const time = new Date(Date.now()).toISOString();
  const { actor, auth, moreInfo, serverUrl } = store.getState().params;

  let statement, systemMsg;

  switch(action.type) {
    case "START_THINKALOUD":
      statement = statements.start;
      break;
    case "USER_NEXT_LINE":
      statement = statements.nextLine;
      break;
    case "END_THINKALOUD":
      statement = statements.complete;
      break;
    default:
      break;
  }
  if(statement){
    statement.actor = actor;
    statement.timestamp = time;
    statement.object.moreInfo = moreInfo;
    //Add code to send log to your server 
    // axios.post(serverUrl + '/log/xapi', statement, {auth}).catch(err => {
    //   console.log(err);
    // });
  }else if(systemMsg){
    //Add code to send log to your server
    // axios.post(serverUrl + '/log/system', systemMsg, {auth}).catch(err => {
    //   console.log(err);
    // });
  }

  let result = next(action)
  return result
}

