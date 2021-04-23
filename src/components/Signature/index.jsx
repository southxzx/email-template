import React from 'react'
import './Signature.css'

const Signature = (props) => {
  const { name, email, phone, position } = props
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
            <td colSpan={1}>
              <b>HCMC:</b>
            </td>
            <td colSpan={11}>
                Centec Tower, Ground Floor <br />72-74 Nguyen Thi Minh Khai, District 3, HCMC
            </td>
          </tr>
          <tr style={{ fontSize: 12, color: '#292929' }}>
            <td colSpan={1} style={{ paddingBottom: '10px'}}>
              <b>Hanoi:</b>
            </td>
            <td colSpan={11} style={{ paddingBottom: '10px'}}>
                Dreamplex Thai Ha <br />174 Thai Ha, Dong Da District, Hanoi
            </td>
          </tr>
          <tr>
            <td colSpan={1} width="55px">
              <a target="_blank" rel="noopener noreferrer" href="https://vietcetera.com/"><img width="30px" src="https://ci4.googleusercontent.com/proxy/_vdhVhGADR-e7T-X7fsgkDtAFbxhlSw1GCt1A2wGOkH35_G91SoqvE5Sa0AfVSruXI5kPJz-rDcC1-gNJ8hq227A=s0-d-e1-ft#https://i.postimg.cc/zDdRZGZj/Untitled-3-02.png" alt="logo-vietcetera" /></a>
            </td>
            <td colSpan={1} width="55px">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vietcetera/"><img  width="30px" src="https://ci4.googleusercontent.com/proxy/1cXo37lAMSmNhBx0iiLM0sGWtm4GB-XA8jqbItl9wrXLiLxQD9Ka3HOnxI-BrYQFKg4s82ZkYm5I4EaR63xQ5qJq=s0-d-e1-ft#https://i.postimg.cc/Rhb3cXQ8/Untitled-3-03.png" alt="logo-vietcetera-ig" /></a>
            </td>
            <td colSpan={1} width="55px">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vietcetera"><img  width="30px" src="https://ci6.googleusercontent.com/proxy/JcuaDTm8TtTUa2jB4UV3_WyjnTxegtqNtpTfntj8Tz4_B9Q-eHk6wT2uziX266HSEcvUCpalS_WrRIWgnQbjq4dv=s0-d-e1-ft#https://i.postimg.cc/prdhhg8z/Untitled-3-04.png" alt="logo-vietcetera-fb" /></a>
            </td>
            <td colSpan={1} width="55px">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/showcase/vietcetera-vn/"><img width="30px" src="https://ci5.googleusercontent.com/proxy/kozm-3AwfYwj3Sy0j4tkMfBlgXmMaOXUJUyuiJK2GK4xA-d8H6wNngjwIeOlxYmJtxF5gCJHTLENMmMJ2ksEJw=s0-d-e1-ft#https://i.postimg.cc/6pTTcJz6/Linkedin-03.png" alt="logo-vietcetera-linkedin" /></a>
            </td>
            <td colSpan={8}></td>
          </tr>
          {/* row 6 => another text link */}
          <tr>
            <td colSpan={2}>
              <a href="https://jobs.lever.co/vietcetera" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", color: '#292929' }}>We're hiring</a>
            </td>
            <td colSpan={10}>
              <a href="https://newsletter.vietcetera.com/subscribe-vietcetera-newsletter" rel="noopener noreferrer" target="_blank" style={{ fontSize: "12px", fontWeight: 700, marginRight: "20px", textTransform: "uppercase", textDecoration: "none", color: '#292929' }}>Sign up for our email letter</a>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => selectElementContents(document.getElementById('myTable'))} style={{ display: "block", marginTop: "12px" }} className="btn">Copy</button>
    </div>
  )
}

export default Signature
