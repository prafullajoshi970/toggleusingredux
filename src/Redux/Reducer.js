var initialState=false;
const myreducer=(storeData=initialState,action)=>{
    if(action.type==='dark'){
        return initialState=false;
    }
    else if(action.type==='light'){
        return initialState=true;
    }
    return storeData;
}
export default myreducer;