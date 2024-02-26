const iState = {firstname: "", secondname: ""}

const reducers = (state = iState, action) => {
    if(action.type === "SUBMIT") {
        return action.payload
    }
    return state;
}
export default reducers;
