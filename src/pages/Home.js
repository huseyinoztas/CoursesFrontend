
import Egitmen from "../components/Egitmen"
import EgitmenEkle from "../components/EgitmenEkle"
import Kurslar from "../components/Kurslar"
import KursEkle from "../components/KursEkle"

import { useQuery } from "@apollo/client"
import {GET_YETKILI} from '../queries/YetkiliQueries'
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'



function Home() {

  const navigate=useNavigate();
  const token=localStorage.getItem('token')

  const myId=decodeToken(token)

  let id;

  if(myId!==null) {
    id=myId.id
  }

  useQuery(GET_YETKILI,{
    variables:{id},
    onCompleted:data=>{
      if(data.yetkili==null){
        navigate('/signup')
      }
    }
  })

  useEffect(() => {
    if(!token) navigate('/signup')
    if(id===undefined) navigate('/signup')
  },[])

  return (
    <>
        <KursEkle />
        <Kurslar />
        <hr/>
        <EgitmenEkle />
        <Egitmen />
        
        
    </>
  )
}

export default Home
