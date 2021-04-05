import FormInfo from "./components/Form/FormInfo";
import Signature from "./components/Signature";
import { useState, useEffect } from 'react'

function App() {

  // const [name, setName] = useState('Hao Tran');
  // const [email, setEmail] = useState('hao@vietcetera.com');
  // const [position, setPosition] = useState('Co-founder & CEO');
  // const [phone, setPhone] = useState('+032987789');

  const [dataFormDefault, setDataFormDefault] = useState({
    name: '',
    email: '',
    position: '',
    phone: ''
  })

  const handleChange = (e) => {
    setDataFormDefault({ ...dataFormDefault, [e.target.name]: e.target.value })
  }
  const handleReset = () => {
    setDataFormDefault({ ...dataFormDefault, name: '', email: '', position: '', phone: '' })
  }

  return (
    <div className="container">
      <div className="content">
        <FormInfo
          {...dataFormDefault}
          handleChange={handleChange}
          handleReset={handleReset}
        />
        <Signature
          {...dataFormDefault}
        />
      </div>
    </div>
  );
}

export default App;
