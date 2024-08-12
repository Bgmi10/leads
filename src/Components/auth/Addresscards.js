import React from 'react'
import { DeleteAddress } from './DeleteAddress';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { faEdit  , faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Addresscards = ({handleeditaddress , filterdata , token , baseurl ,handleselectaddress , selctedata}) => {
  return (
   
    <>
       { filterdata?.map((i) => (
         <div key={i?.id} className="border p-4 m-4 rounded-lg shadow-md bg-white" onClick={()=>handleselectaddress(i)}>
             
              <div className='flex justify-between  '>
                <div>
                   
                {selctedata?.id === i?.id &&<DoneAllIcon fontSize='small' color='primary'/>}
                </div>
                <div>
                <FontAwesomeIcon icon={faEdit} onClick={()=> handleeditaddress(i?.id)} className='cursor-pointer '/>
                <DeleteAddress FontAwesomeIcon={FontAwesomeIcon} faTrash={faTrash} i={i} filterdata={filterdata} baseurl={baseurl} token={token} />
                </div>
              </div>
              <div className="font-bold text-lg text-gray-700 mt-1">
                  <span>{i?.attributes?.name}</span>
              </div>
              <div className="mt-2 text-gray-600">
                  <span>{i?.attributes?.mobilenumber}</span>
              </div>
              <div className="mt-2 text-gray-600">
                  <span>{i?.attributes?.address}</span>
              </div>
       </div>
         ))}
    </>
  )
}
