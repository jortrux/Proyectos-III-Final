import React from 'react'
import { PlusIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowRightIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, id }) => {
  return (
    <div className="grid grid-cols-5">
        <div 
            className="col-span-2 h-52 md:h-72 rounded-l-xl border-b-2 border-l-2 border-t-2 border-[#9DA3A7] relative group " 
            style={ {background: `url(${imgUrl})`, backgroundSize: "cover" }}
        />
        <div className="col-span-3 text-black rounded-r-xl border-r-2 border-t-2 border-b-2 border-[#9DA3A7] bg-white py-6 px-4 flex flex-col justify-between">
            <div>
                <h5 className='font-xl font-semibold mb-2 text-[#14192C]'>{title}</h5>
                <p className='text-[#000000]'>{description}</p>
            </div>
            <div className='flex self-end'>
                <Link
                    href="../activities"
                    >
                    <PlusIcon className='h-6 w-6 ext-[#14192C] cursor-pointer' />
                    <h1>INFO</h1>
                </Link>
                <Link
                    href={`../communities/${id}`}
                    >
                    <ArrowRightIcon className='h-6 w-6 text-[#14192C] cursor-pointer' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard