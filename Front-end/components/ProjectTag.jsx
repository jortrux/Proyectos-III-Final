import React from 'react'

const ProjectTag = ({ name, onClick, isSelected}) => {
    const buttonStyles = isSelected 
    ? 'border-blue-500 text-white' 
    : 'text-[#ADB7BE] border-slate-500 hover:border-white'
    return (
        <button 
        className={`${buttonStyles} rounded-full border-4 px-6 py-3 text-xs md:text-sm  cursor-pointer`}
        onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag