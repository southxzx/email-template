import React from 'react'
import './Signature.css'

const Signature = (props) => {
  const { name, email, phone, position } = props
  const HOST_IMG = "https://vietcetera.com"
  const defaultValue = {
    name: 'Your name',
    email: 'yourname@vietcetera.com',
    position: 'Your position',
    phone: '+84 xxx.xxxx'
  }
  function selectElementContents(el) {
    var body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand("copy");
      console.log(range);
      alert("Copied successfully!");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
      alert("Copied successfully!");
    }
  }
  return (
    <div style={{ width: "100%" }}>
      <table id="myTable" width="100%" style={{ width: "420px" }}>
        <tbody>
          <tr>
            <td maxWidth="35px"></td>
          </tr>
          <tr>
            <td colSpan={9} style={{fontWeight: 700, fontSize: 18, color: '#292929', textTransform: 'uppercase' }} >
              {name ? name : defaultValue.name}
            </td>
            <td colSpan={3} align="right">
              <a href="https://vietcetera.com/" target="_blank" rel="noopener noreferrer"><img style={{ marginTop: "4px"}} src="https://vietcetera.com/uploads/images/06-apr-2021/text.png" alt="logo-home" width="93px" height="16px" /></a>
            </td>
          </tr>
          <tr>
            <td colSpan={12} style={{fontSize: 12, color: '#292929', textTransform: 'uppercase' }}>
              {position ? position : defaultValue.position}
            </td>
          </tr>
          <tr>
            <td colSpan={12} style={{ paddingTop: "10px", fontSize: 12, textTransform: "uppercase" }}>
              <a style={{ color: '#292929', textDecoration: 'none' }} href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email ? email : defaultValue.email}</a>
            </td>
          </tr>
          <tr>
            <td colSpan={12} style={{ paddingBottom: "15px", fontSize: 12, borderBottom: "1px solid #292929", textTransform: "uppercase" }}>
              <a style={{ color: '#292929', textDecoration: 'none' }} href={`tel:${phone}`}>{phone ? phone : defaultValue.phone}</a>
            </td>
          </tr>
          <tr style={{ fontSize: 12, color: '#292929' }}>
            <td colSpan={1} style={{ paddingTop: '10px'}}>
              <b>HCMC:</b>
            </td>
            <td colSpan={11} style={{ paddingTop: '10px'}}>
                <strong>Empire City </strong><br />C2.3-4-5, Cove Residences, N19 Street, Empire City, <br/>Thu Duc City.
            </td>
          </tr>
          <tr style={{ fontSize: 12, color: '#292929' }}>
            <td colSpan={1} style={{ paddingBottom: '10px'}}>
              <b>Hanoi:</b>
            </td>
            <td colSpan={11} style={{ paddingBottom: '10px'}}>
                <strong>Dreamplex Thai Ha </strong><br />174 Thai Ha, Dong Da District, Hanoi.
            </td>
          </tr>
          <tr>
            <td colSpan={1} width="55px">
              <a target="_blank" rel="noopener noreferrer" href="https://vietcetera.com/"><img width="30px" src={HOST_IMG + "/uploads/images/05-jul-2021/logo-vct.png"} alt="logo-vietcetera" /></a>
            </td>
            <td colSpan={1} width="55px">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vietcetera/"><img  width="30px" src={HOST_IMG + "/uploads/images/05-jul-2021/logo-ig.png"} alt="logo-vietcetera-ig" /></a>
            </td>
            <td colSpan={1} width="55px">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vietcetera"><img  width="30px" src={HOST_IMG + "/uploads/images/05-jul-2021/logo-fb.png"} alt="logo-vietcetera-fb" /></a>
            </td>
            <td colSpan={1} width="55px">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/showcase/vietcetera-vn/"><img width="30px" src={HOST_IMG + "/uploads/images/05-jul-2021/logo-in.png"} alt="logo-vietcetera-linkedin" /></a>
            </td>
            <td colSpan={8}></td>
          </tr>
          {/* row 6 => another text link */}
          <tr>
            <td colSpan={2}>
              <a href="https://vietcetera.com/career" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", color: '#292929' }}>We're hiring</a>
            </td>
            <td colSpan={10}>
              <a href="https://newsletter.vietcetera.com/subscribe-vietcetera-newsletter" rel="noopener noreferrer" target="_blank" style={{ fontSize: "12px", fontWeight: 700, marginRight: "20px", textTransform: "uppercase", textDecoration: "none", color: '#292929' }}>SUBSCRIBE TO OUR NEWSLETTER</a>
            </td>
          </tr>
          <tr/>
        </tbody>
      </table>
      <button onClick={() => selectElementContents(document.getElementById('myTable'))} style={{ display: "block", marginTop: "12px" }} className="btn">Copy</button>
    </div>
  )
}

export default Signature
