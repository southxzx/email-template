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
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
    }
  }
  return (
    <div>
      <table id="myTable" style={{ width: "420px" }}>
        <tbody>
          {/* row 1 => name + position + logo home */}
          <tr>
            <td >
              <div style={{ display: 'flex', justifyContent: 'space-between', textTransform: 'uppercase' }}>
                <div>
                  <h3 style={{ margin: 0, fontWeight: 700, fontSize: 18, color: '#292929' }}>{name ? name : defaultValue.name}.</h3>
                  <p style={{ margin: 0, fontSize: 12, color: '#292929', fontWeight: 500, }}>{position ? position : defaultValue.position}</p>
                </div>
                <div>
                  <img style={{ width: "93px", height: "16px", marginTop: "2px" }} src="https://vietcetera.com/images/header/logo-text.svg" all="logo-home" />
                </div>
              </div>
            </td>

          </tr>
          {/* end */}
          {/* row 2 => email */}
          <tr>
            <td style={{ padding: "15px 0", borderBottom: "1px solid #292929", textTransform: "uppercase" }}>
              <p style={{ margin: 0, fontSize: 12, color: '#292929', fontWeight: 500, paddingBottom: '6px' }}>{email ? email : defaultValue.email}</p>
              <p style={{ margin: 0, fontSize: 12, color: '#292929', fontWeight: 500 }}>{phone ? phone : defaultValue.phone}</p>
            </td>
          </tr>
          {/* row 4 -> address */}
          <tr>
            <td style={{ padding: "15px 0" }}>
              <p style={{ margin: 0, fontSize: 12, color: '#292929', fontWeight: 500 }}>
                Centec Tower, Ground Floor <br />72-74 Nguyen Thi Minh Khai, District 3 HCMC</p>
              {/* <p style={{ margin: 0, fontSize: 12, color: '#757575', fontWeight: 600}}>address path 2 </p> */}
            </td>
          </tr>
          {/* row 5 => logo social */}
          <tr>
            <td>
              <div>
                <div className="logo" style={{ display: "flex" }}>
                  <a style={{ marginRight: '30px' }} target="_blank" rel="noopener noreferrer" href="https://vietcetera.com/"><img style={{ width: "30px" }} src="/images/vietcetera.png" /></a>
                  <a style={{ marginRight: '30px' }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vietcetera/"><img style={{ width: "30px" }} src="/images/ig.png" /></a>
                  <a style={{ marginRight: '30px' }} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vietcetera"><img style={{ width: "30px" }} src="/images/fb.png" /></a>
                  <a style={{ marginRight: '30px' }} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/haontran/"><img style={{ width: "30px" }} src="/images/linkedin.png" /></a>
                </div>
              </div>
            </td>
          </tr>
          {/* row 6 => another text link */}
          <tr>
            <td>
              <a href="https://jobs.lever.co/vietcetera" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", fontWeight: 700, marginRight: "20px", textTransform: "uppercase", textDecoration: "none", color: '#292929' }}>We're hiring</a>
              <a href="https://vietcetera.us13.list-manage.com/subscribe?u=0c90f32d461af4703e6276078&id=2552de7ba8" rel="noopener noreferrer" target="_blank" style={{ fontSize: "12px", fontWeight: 700, marginRight: "20px", textTransform: "uppercase", textDecoration: "none", color: '#292929' }}>Sign up for our email letter</a>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => selectElementContents(document.getElementById('myTable'))} style={{ display: "block"}} className="btn">Copy</button>
    </div>
    // <div className="signature-content" style={{}}>
    //   <div className="name-pos-block" style={{display: "flex", justifyContent: "space-between", textTransform: "uppercase"}}>
    //     <div className="name-box">
    //       <h2 style={{ margin: 0}}>{name? name : defaultValue.name}.</h2>
    //       <p style={{ margin: 0}}>{position? position : defaultValue.position}</p>
    //     </div>
    //     <svg style={{marginTop: "5px", width: "93px", height: "16px"}} width="325" height="56" viewBox="0 0 325 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M0 0H10.985L20.3262 38.22L29.7403 0H40.7253L25.9701 55.216H14.671C9.72642 36.8144 4.83609 18.4091 0 0Z" fill="#181918" />
    //       <path d="M52.9052 55.217H42.7056V15.065H52.9052V55.217ZM47.8559 12.4554C46.2192 12.4554 44.6495 11.8064 43.4921 10.6512C42.3348 9.49597 41.6846 7.92915 41.6846 6.29542C41.6846 4.65426 42.3377 3.08032 43.5003 1.91984C44.6629 0.759369 46.2398 0.107422 47.884 0.107422C49.5282 0.107422 51.105 0.759369 52.2676 1.91984C53.4302 3.08032 54.0834 4.65426 54.0834 6.29542C54.0834 7.10672 53.9228 7.91004 53.6109 8.65923C53.299 9.40843 52.842 10.0887 52.2659 10.6611C51.6899 11.2335 51.0062 11.6867 50.2543 11.9946C49.5023 12.3025 48.6968 12.4591 47.884 12.4554" fill="#181918" />
    //       <path d="M67.8626 29.0589H80.4971V26.9421C80.4971 21.0677 78.0622 19.1021 74.2191 19.1021C70.6061 19.1021 67.8626 21.1349 67.8626 25.8221V29.0589ZM90.6966 41.1213V41.4405C90.6966 49.5045 84.5758 56.0005 74.2191 56.0005C63.7054 56.0005 57.6631 49.3421 57.6631 38.7693V28.0397C57.6631 17.3101 63.7054 10.6797 74.2191 10.6797C84.5758 10.6797 90.6966 16.8677 90.6966 27.6757V36.2661H67.8626V41.0429C67.8371 42.753 68.4918 44.4036 69.6833 45.6328C70.8748 46.8619 72.5059 47.5695 74.2191 47.6005C77.6695 47.6005 80.4971 45.6461 80.4971 42.0453V41.1213H90.6966Z" fill="#181918" />
    //       <path d="M93.0527 11.984C98.7753 11.984 100.739 8.26559 100.739 0H107.595V11.2784H115.674V20.2832H107.595V46.4464H115.831V55.608C114.608 55.7596 113.377 55.8382 112.145 55.8432C100.296 55.8432 97.3951 49.6832 97.3951 38.9256V20.2832H93.1537C93.1537 17.4832 93.0808 14.8008 93.0808 11.984" fill="#181918" />
    //       <path d="M151.356 38.1413C151.356 49.2797 145.7 55.9997 134.872 55.9997C124.359 55.9997 118.316 49.3413 118.316 38.7685V28.1286C118.316 17.399 124.359 10.6622 134.872 10.6622C145.779 10.6398 151.356 17.3094 151.356 28.7446H141.15C141.15 22.5846 138.794 19.9694 134.872 19.9694C131.108 19.9694 128.516 22.0078 128.516 27.5686V37.9061C128.516 43.7021 130.637 46.7597 134.872 46.7597C138.558 46.7597 141.15 44.0941 141.15 38.1413H151.356Z" fill="#181918" />
    //       <path d="M165.083 29.0589H177.723V26.9421C177.723 21.0677 175.288 19.1021 171.445 19.1021C167.832 19.1021 165.089 21.1349 165.089 25.8221L165.083 29.0589ZM187.917 41.1213V41.4405C187.917 49.5045 181.796 56.0005 171.44 56.0005C160.926 56.0005 154.884 49.3421 154.884 38.7693V28.0397C154.884 17.3101 160.926 10.6797 171.44 10.6797C181.796 10.6797 187.917 16.8677 187.917 27.6757V36.2661H165.083V41.0429C165.058 42.753 165.713 44.4036 166.904 45.6328C168.096 46.8619 169.727 47.5695 171.44 47.6005C174.918 47.6005 177.723 45.6629 177.723 42.0621V41.1213H187.917Z" fill="#181918" />
    //       <path d="M225.737 29.0589H238.371V26.9421C238.371 21.0677 235.936 19.1021 232.093 19.1021C228.486 19.1021 225.737 21.1349 225.737 25.8221V29.0589ZM248.571 41.1213V41.4405C248.571 49.5045 242.45 56.0005 232.093 56.0005C221.579 56.0005 215.537 49.3421 215.537 38.7693V28.0397C215.537 17.3101 221.579 10.6797 232.093 10.6797C242.45 10.6797 248.571 16.8677 248.571 27.6757V36.2661H225.737V41.0429C225.713 42.7526 226.368 44.4023 227.559 45.6312C228.75 46.86 230.38 47.5681 232.093 47.6005C235.543 47.6005 238.371 45.6461 238.371 42.0453V41.1213H248.571Z" fill="#181918" />
    //       <path d="M274.467 20.8315H263.482V55.2155H253.277V11.1995H262.854V17.1523C264.122 12.3195 269.446 10.0795 274.467 10.7291V20.8315Z" fill="#181918" />
    //       <path d="M298.867 38.8471V27.4904C298.867 22.1648 296.203 19.8184 292.589 19.8184C288.825 19.8184 286.317 22.2432 286.317 27.6584V38.8583C286.317 44.3407 288.825 46.7711 292.589 46.7711C296.354 46.7711 298.867 44.2399 298.867 38.8471ZM276.039 39.6311V26.88C276.039 15.5232 281.369 10.668 289.061 10.668C295.496 10.668 298.867 14.7392 299.496 16.1504V11.2H309.073V55.2159H299.496V50.3607C298.867 51.8503 295.496 55.9215 289.061 55.9215C281.206 55.9215 276.039 50.8815 276.039 39.6311Z" fill="#181918" />
    //       <path d="M318.801 55.8441C317.988 55.8478 317.183 55.6912 316.431 55.3832C315.679 55.0753 314.995 54.6222 314.419 54.0498C313.843 53.4774 313.386 52.7971 313.074 52.0479C312.762 51.2987 312.602 50.4954 312.602 49.6841C312.602 48.0429 313.255 46.469 314.417 45.3085C315.58 44.148 317.157 43.4961 318.801 43.4961C320.445 43.4961 322.022 44.148 323.185 45.3085C324.347 46.469 325 48.0429 325 49.6841C325 51.3178 324.35 52.8846 323.193 54.0399C322.035 55.1951 320.466 55.8441 318.829 55.8441" fill="#181918" />
    //       <path d="M190.269 11.984C195.997 11.984 197.96 8.26559 197.96 0H204.788V11.2784H212.867V20.2832H204.788V46.4464H213.024V55.608C211.801 55.7596 210.57 55.8382 209.338 55.8432C197.489 55.8432 194.589 49.6832 194.589 38.9256V20.2832H190.347C190.347 17.4832 190.269 14.8008 190.269 11.984Z" fill="#181918" />
    //     </svg>

    //   </div>
    //   <div className="email-phone-block" style={{margin: 0, padding: "15px 0px", borderBottom: "solid 1.5px #cecece", textTransform: "uppercase"}}>
    //     <p style={{margin: "0 0 5px 0"}}>{email? email : defaultValue.email}</p>
    //     <p style={{margin: "0 0 5px 0"}}>{phone? phone : defaultValue.phone}</p>
    //   </div>
    //   <div className="address-block" style={{  padding: "15px 0px"}}>
    //     <p style={{margin: "0 0 5px 0"}}>Centec Towner, Ground Floor</p>
    //     <p style={{margin: "0 0 5px 0"}}>72-74 Nguyen Thi Minh Khai, District 3, HCMC</p>
    //   </div>
    //   <div className="external-link-block">
    //     <div className="logo" style={{display: "flex"}}>
    //       <a style={{marginRight: '20px'}} target="_blank" rel="noopener noreferrer" href="https://vietcetera.com/"><img style={{ width: "30px"}} src="/images/vietcetera.png"/></a>
    //       <a style={{marginRight: '20px'}} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vietcetera/"><img style={{ width: "30px"}} src="/images/ig.png"/></a>
    //       <a style={{marginRight: '20px'}} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vietcetera"><img style={{ width: "30px"}} src="/images/fb.png"/></a>
    //       <a style={{marginRight: '20px'}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/haontran/"><img style={{ width: "30px"}} src="/images/linkedin.png"/></a>
    //     </div>
    //     <div className="last-line">
    //       <span style={{fontSize: "12px", fontWeight: 700, marginRight: "20px", textTransform: "uppercase"}}>We're hiring</span>
    //       <span style={{fontSize: "12px", fontWeight: 700, marginRight: "20px", textTransform: "uppercase"}}>Sign up for our email letter</span>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Signature