import React from 'react';
import './App.css';
import { useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      if(!formik.errors.email && !formik.errors.password){
        setTimeout(() => {
          alert("Login Successful");
        }, 400);
      }
    },
    validate: values =>{
      let errors = {};
      if(!values.email) {
        errors.email = 'Field required';
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email)){
        errors.email = 'Username should be an email';
      }
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <h2>Login form using Formik</h2>
        <h3>please enter your credentials...</h3>
        <div>Email:</div>
          <input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
          {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
        
        <div>Password:</div>
          <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
          {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        
        <button id="submitBtn" type="submit">Submit</button>
      </form>      
    </div>
  );
}

export default App;
