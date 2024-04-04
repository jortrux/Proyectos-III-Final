"use client"
import {React, useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

// projectsData array de comunidades traido de BBDD
const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a description of project 1",
        imgUrl: "/1.png",
        tag: ["All", "Grados"],
    },
    {
        id: 2,
        title: "iNSO",
        description: "This is a description of project 2",
        imgUrl: "/2.png",
        tag: ["All", "Grados", "INSO"],
    },
    {
        id: 3,
        title: "Project 3",
        description: "This is a description of project 3",
        imgUrl: "/3.png",
        tag: ["All", "Ciclos"],
    },
    {
        id: 4,
        title: "Project 4",
        description: "This is a description of project 4",
        imgUrl: "/4.png",
        tag: ["All", "Ciclos"],
    },
    {
        id: 5,
        title: "Project 5",
        description: "This is a description of project 5",
        imgUrl: "/5.png",
        tag: ["All", "Clubes"],
    },
    {
        id: 6,
        title: "Project 6",
        description: "This is a description of project 6",
        imgUrl: "/6.png",
        tag: ["All", "Postgrados"],
    },
    
]
const ProjectsSection = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }
    
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    )

  return (
    <>
        <h2 className='text-left text-3xl font-bold text-white mt-4'>
            Filtrar por...</h2>
        <div className='text-white flex flex-wrap justify-start items-center gap-2 py-6'>
            <ProjectTag 
                onClick={handleTagChange}
                name="All" 
                isSelected={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange}
                name="Grados" 
                isSelected={tag === "Grados"} 
            />
            <ProjectTag 
                onClick={handleTagChange}
                name="Ciclos" 
                isSelected={tag === "Ciclos"} 
            />
            <ProjectTag 
                onClick={handleTagChange}
                name="Clubes" 
                isSelected={tag === "Clubes"} 
            />
            <ProjectTag 
                onClick={handleTagChange}
                name="Postgrados" 
                isSelected={tag === "Postgrados"} 
            />
            <ProjectTag 
                onClick={handleTagChange}
                name="INSO" 
                isSelected={tag === "INSO"} 
            />        
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
                <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.imgUrl}
                />
            ))} 
        </div>
    </>
  )
}

export default ProjectsSection