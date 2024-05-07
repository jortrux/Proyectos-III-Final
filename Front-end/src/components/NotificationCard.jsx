import React from 'react'
import { PlusIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowRightIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'

const NotificationCard = ({ imgUrl, description, id, date }) => {
  return (
    <div className="grid grid-cols-5 min-w-screen border-b-2">
       <div 
            className="col-span-1 relative group " 
            style={ {background: `url(${imgUrl})`, backgroundSize: "cover" }}
        />
        <div className="col-span-3 grid grid-rows-5">

        </div>
        <Link className="col-span-1 rounded-xl bg-[#0065EF]" href={`../`}></Link>

    </div>
  )
}

const getLabel = (id) => {
    if(id == "Mensaje"){
        return "Ver mensaje"
    }else if(id == "Actividad"){
        return "Ver actividad"
    }else if(id == "Recordatorio"){
        return "Ver info"
    }
}

const getLink = (id) => {
    if(id == "Mensaje"){
        return "../messages"
    }else if(id == "Actividad"){
        return "../activities"
    }else if(id == "Recordatorio"){
        return "../communities"
    }
}

export default NotificationCard