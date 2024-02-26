import {useState} from "react";
//import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import Profile from "./Profile";
import InputElement from "./InputElement";

function App(props) {
  // const [firstname, setFirstName] = useState("");
  // const [secondname, setScondName] = useState("");
  const [showProfile,setShowProfile] = useState(false);
  //const {handleSubmit} = props;
  return (
    <div className="App">
      {/* <h1>REDUX FORM</h1>
      <input type="text" value={firstname} onChange={(e) => {setFirstName(e.target.value)}} />
      <input type="text" value={secondname} onChange={(e) => {setScondName(e.target.value)}} />
      <button onClick={() => {props.submitIt(firstname, secondname)}}>Submit It</button> */}
      {/* <InputElement /> */}
      <form onSubmit={(e) => {
        //console.log(formValues)
        e.preventDefault();
        setShowProfile(true);
        } }>
        <label>FirstName: </label>
        <Field type="text" name="firstName" component="input" /><br /><br />
        <label>LastName: </label>
        <Field type="text" name="lastName" component="input" /><br /><br />
        <button value="submit">Submit It</button><br /><br />
      </form>
      {showProfile ? <Profile /> : null}
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitIt: (firstname, secondname) => {dispatch({type: "SUBMIT", payload: {firstname: firstname, secondname: secondname}})}
//   }
// }
//export default connect(null, mapDispatchToProps)(App);
export default reduxForm({
  form: "ReduxForm"
})(App);
