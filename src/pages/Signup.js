import { useState } from "react"
import { useMutation } from "@apollo/client"
import { ADD_YETKILI } from "../mutations/yetkiliMutation"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"



function SignUp() {
    
    const navigate=useNavigate();
    const [email,setEmail]=useState('')
    const [parola,setParola]=useState('')

    const [yetkiliEkle,{loading}]=useMutation(ADD_YETKILI,{
        variables:{email,parola},
        update(proxy,result){
            navigate('/')
        }
    })

   const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "" || parola === "") {
          return alert("Alanlar boş geçilemez");
        }
      
        if (parola.length < 8) {
          return alert("Parola 8 karakterden az olamaz");
        }
      
        try {
          const yetkili = await yetkiliEkle();
          localStorage.setItem("token", yetkili.data.yetkiliEkle.token);
          setEmail("");
          setParola("");
        } catch (err) {
          alert(err.message);
        }
      };


    if(loading) return <Spinner tip="grow" />

  return (
    
    <div className="card" >
    <div className="card-body">
    <h5 className="card-title">Üyelik Oluştur</h5>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="emailAdres" className="form-label">Email Adresiniz</label>
            <input type="email" className="form-control" id="emailAdres" value={email} onChange={(e)=>setEmail(e.target.value)}  />
            
        </div>
        <div className="mb-3">
            <label htmlFor="parola" className="form-label">Parolanız</label>
            <input type="password" className="form-control" id="parola" value={parola} onChange={(e)=>setParola(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Üye Ol</button>
        {parola.length <=8 ?  <p>Parola en az 8 karakter büyük harf küçük harf ve sayı içermelidir</p> : <p>Parola :<FaCheckCircle/></p>}

    </form>
    </div>
</div>
  )
}

export default SignUp
