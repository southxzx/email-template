import React from 'react'
// import Signature from '../../Signature'
import './formInfo.css'

const FormInfo = (props) => {

  // console.log(props);
  const { name, email, phone, position, handleChange, handleReset } = props
  const arrInfo = [
    {
      placeholder: "Your name",
      label: "Name",
      name: "name",
      value: name
    },
    {
      placeholder: "Your position",
      label: "Position",
      name: "position",
      value: position
    },
    {
      placeholder: "Your email address",
      label: "Email",
      name: "email",
      value: email
    },
    {
      placeholder: "Your phone number",
      label: "Phone Number",
      name: "phone",
      value: phone
    }
  ]

  return (
    <div className="form-content">
      <div className="form-info">
        <h2 className="title">Your information.</h2>
        {arrInfo.map((itemInfo, index) => (
          <div className="form-item" key={index}>
            {/* <label>{itemInfo.label}</label> */}
            <input
              className="input-field" 
              onChange={handleChange} 
              type="text" name={itemInfo.name} 
              value={itemInfo.value} 
              placeholder={itemInfo.placeholder} />
          </div>
        ))}
        {/* <div className="address-block">
          <label>Choose your address</label>
          <input type="radio" value=/>
        </div> */}
      </div>
      <button className="btn" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default FormInfo
