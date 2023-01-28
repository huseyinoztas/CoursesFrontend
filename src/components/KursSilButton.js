import { useNavigate } from 'react-router-dom'
import {FaTrash} from 'react-icons/fa'
import { GET_KURSLAR } from '../queries/kursQueries'
import { DELETE_KURS } from '../mutations/kursMutation'
import { useMutation } from '@apollo/client'


function KursSilButton({kursId}) {

    const navigate=useNavigate();
    
    const [kursSil] =useMutation(DELETE_KURS,{
        variables:{id:kursId},
        onCompleted:()=>navigate('/'),
        refetchQueries:[{query:GET_KURSLAR}]
    })

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={kursSil}>
        <FaTrash /> Sil
      </button>
    </div>
  )
}

export default KursSilButton
