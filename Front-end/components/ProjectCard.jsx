import React from 'react'
import { PlusIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowLeftEndOnRectangleIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="grid grid-cols-5">
        <div 
            className="col-span-2 h-52 md:h-72 rounded-l-xl relative group" 
            style={ {background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                <Link 
                    href="/" 
                    className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                    <ArrowLeftEndOnRectangleIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                </Link>
                
            </div>
        </div>
        <div className="col-span-3 text-white rounded-r-xl bg-[#3988ff] py-6 px-4 ml-1 flex flex-col justify-between">
            <div>
                <h5 className='font-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#dbdfe2]'>{description}</p>
            </div>
            <div className='flex self-end'>
                <Link
                    href="/"
                    >
                    <ChatBubbleOvalLeftEllipsisIcon className='h-10 w-10 text-white cursor-pointer' />
                </Link>
                <Link
                    href="/"
                    >
                    <PlusIcon className='h-10 w-10 text-white cursor-pointer' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard