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
    <div style={{width: "100%"}}>
      <table id="myTable" style={{ width: "420px" }}>
        <tbody>
          {/* row 1 => name + position + logo home */}
          <tr>
            <td >
              <div style={{ textTransform: 'uppercase' }}>
                <div style={{ display: 'inline-block'}}>
                  <h3 style={{ margin: 0, fontWeight: 700, fontSize: 18, color: '#292929' }}>{name ? name : defaultValue.name}.</h3>
                  <p style={{ margin: 0, fontSize: 12, color: '#292929', fontWeight: 500, }}>{position ? position : defaultValue.position}</p>
                </div>
                <div style={{ display: 'inline-block', float: 'right'}}>
                  <a href="https://vietcetera.com/" target="_blank" rel="noopener noreferrer"><img style={{ marginTop: "4px", width: "93px", height: "16px" }} src="https://vietcetera.com/uploads/images/06-apr-2021/text.png" alt="logo-home" width="93px" height="16px" /></a>
                </div>
              </div>
            </td>

          </tr>
          {/* end */}
          {/* row 2 => email */}
          <tr>
            <td style={{ padding: "10px 0 15px", fontSize: 12, borderBottom: "1px solid #292929", textTransform: "uppercase" }}>
              <a style={{ margin: 0, color: '#292929', fontWeight: 500, paddingBottom: '6px', textDecoration: 'none' }} href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email ? email : defaultValue.email}</a>
              <a style={{ margin: 0, color: '#292929', fontWeight: 500, display: 'block', textDecoration: 'none' }} href={`tel:${phone}`}>{phone ? phone : defaultValue.phone}</a>
            </td>
          </tr>
          {/* row 4 -> address */}
          <tr>
            <td style={{ padding: "15px 0", fontSize: 12 }}>
              <div style={{ paddingBottom: "10px"}}>
                <span style={{fontWeight: 600, paddingRight: '10px', verticalAlign: 'top'}}>HCMC:</span>
                <p style={{ margin: 0, color: '#292929', fontWeight: 500, display: 'inline-block' }}>
                  Centec Tower, Ground Floor <br />72-74 Nguyen Thi Minh Khai, District 3, HCMC</p>
              </div>
              <div>
                {/* <div style={{ content: "", display: "inline-block", backgroundColor: "#292929", height: 3, width: 3, borderRadius: "50%", marginRight: "5px"}}></div> */}
                <span style={{fontWeight: 600, paddingRight: '12px', verticalAlign: 'top'}}>Hanoi:</span>
                <p style={{ margin: 0, color: '#292929', fontWeight: 500, display: 'inline-block' }}>
                  Dreamplex Thai Ha <br />174 Thai Ha, Dong Da District, Hanoi</p>
              </div>
              {/* <p style={{ margin: 0, fontSize: 12, color: '#757575', fontWeight: 600}}>address path 2 </p> */}
            </td>
          </tr>
          {/* row 5 => logo social */}
          <tr>
            <td>
              <div>
                <div className="logo" style={{ display: "flex" }}>
                  <a style={{ marginRight: '30px' }} target="_blank" rel="noopener noreferrer" href="https://vietcetera.com/"><img style={{ width: "30px" }} src="https://ci4.googleusercontent.com/proxy/_vdhVhGADR-e7T-X7fsgkDtAFbxhlSw1GCt1A2wGOkH35_G91SoqvE5Sa0AfVSruXI5kPJz-rDcC1-gNJ8hq227A=s0-d-e1-ft#https://i.postimg.cc/zDdRZGZj/Untitled-3-02.png" alt="logo-vietcetera"/></a>
                  <a style={{ marginRight: '30px' }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vietcetera/"><img style={{ width: "30px" }} src="https://ci4.googleusercontent.com/proxy/1cXo37lAMSmNhBx0iiLM0sGWtm4GB-XA8jqbItl9wrXLiLxQD9Ka3HOnxI-BrYQFKg4s82ZkYm5I4EaR63xQ5qJq=s0-d-e1-ft#https://i.postimg.cc/Rhb3cXQ8/Untitled-3-03.png" alt="logo-vietcetera-ig"/></a>
                  <a style={{ marginRight: '30px' }} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vietcetera"><img style={{ width: "30px" }} src="https://ci6.googleusercontent.com/proxy/JcuaDTm8TtTUa2jB4UV3_WyjnTxegtqNtpTfntj8Tz4_B9Q-eHk6wT2uziX266HSEcvUCpalS_WrRIWgnQbjq4dv=s0-d-e1-ft#https://i.postimg.cc/prdhhg8z/Untitled-3-04.png" alt="logo-vietcetera-fb"/></a>
                  <a style={{ marginRight: '30px' }} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/showcase/vietcetera-vn/"><img style={{ width: "30px" }} src="https://ci5.googleusercontent.com/proxy/kozm-3AwfYwj3Sy0j4tkMfBlgXmMaOXUJUyuiJK2GK4xA-d8H6wNngjwIeOlxYmJtxF5gCJHTLENMmMJ2ksEJw=s0-d-e1-ft#https://i.postimg.cc/6pTTcJz6/Linkedin-03.png" alt="logo-vietcetera-linkedin"/></a>
                </div>
              </div>
            </td>
          </tr>
          {/* row 6 => another text link */}
          <tr>
            <td>
              <a href="https://jobs.lever.co/vietcetera" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", fontWeight: 700, marginRight: "20px", textTransform: "uppercase", textDecoration: "none", color: '#292929' }}>We're hiring</a>
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
