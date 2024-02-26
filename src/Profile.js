import {connect} from "react-redux";

function Profile(props) {
  return (
    <div>
        <h1>REDUX FORM</h1>
        <h2>{props.formdata.firstName}</h2>
        <h2>{props.formdata.lastName}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    formdata: state.form.ReduxForm.values
  }
}
export default connect(mapStateToProps)(Profile);
