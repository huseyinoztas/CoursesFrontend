import EgitmenBilgi from "../components/EgitmenBilgi"
import { GET_KURS } from "../queries/kursQueries"
import { useParams, Link } from "react-router-dom"
import Spinner from "../components/Spinner"
import { useQuery } from "@apollo/client"
import KursSilButton from "../components/KursSilButton"
import KursDüzenle from "../components/KursDüzenle"




function Kurs() {

    const {id}=useParams()
    const {loading,error,data}=useQuery(GET_KURS,{
        variables:{id}
    })

    if(loading) return <Spinner />
    if(error) return <p>Bir hata oluştu</p>

  return <>
  {!loading && !error &&(
        <div className="mx-auto w-75 card p-5">
            <Link to="/" className="btn btn-secondary btn-sm w-25 d-inline ms-auto">Geri</Link>
            <h1>{data.kurs.isim}</h1>
            <p>{data.kurs.aciklama}</p>
            <h5 className="mt-3">Kurs Durum:</h5>
            <p className="lead">{data.kurs.durum}</p>
            <EgitmenBilgi egitmen={data.kurs.egitmen} />
            <KursDüzenle kurs={data.kurs}/>
            <KursSilButton kursId={data.kurs.id} />
    </div>
  )}
  </>
   
}

export default Kurs
