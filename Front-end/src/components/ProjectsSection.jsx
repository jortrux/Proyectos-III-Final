"use client"
import {React, useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

// projectsData array de comunidades traido de BBDD
const projectsData = [
    {
        id: 1,
        title: "Comunidad de alumnos de Diseño Digital",
        description: "This is a description of project 1",
        imgUrl: "/1.png",
        tag: ["All", "Grados"],
    },
    {
        id: 2,
        title: "Comunidad de alumnos de ING. Software",
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
    const [tags, setTags] = useState(new Set(["All"]));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const handleTagChange = (tagName) => {
        const updatedTags = new Set(tags);
        // Si se hace clic en "All" y ya está seleccionado, no hacer nada
        if (tagName === "All" && tags.has("All")) {
            return;
        }
        // Si se hace clic en "All" y no hay nada más seleccionado, seleccionar solo "All"
        if (tagName === "All" && Array.from(tags).length === 0) {
            updatedTags.add("All");
        } else {
            // Si se hace clic en "All" y hay otras etiquetas seleccionadas, deseleccionar todas
            if (tagName === "All") {
                updatedTags.clear();
                updatedTags.add("All");
            } else {
                if (updatedTags.has(tagName)) {
                    updatedTags.delete(tagName); // Si la etiqueta ya está seleccionada, quitarla
                } else {
                    updatedTags.add(tagName); // Si la etiqueta no está seleccionada, agregarla
                }
                // Asegúrate de que "All" no esté seleccionado si se selecciona cualquier otra etiqueta
                updatedTags.delete("All");
            }
        }
        if (updatedTags.size === 0) {
            updatedTags.add("All");
        }
        setTags(updatedTags);
    };
    
    const filteredProjects = projectsData.filter((project) =>
        Array.from(tags).some(tag => project.tag.includes(tag)) // Verifica si cada etiqueta seleccionada está incluida en las etiquetas del proyecto
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

  return (
    <>
        <div className="flex flex-wrap">
            <h2 className='text-left text-xl font-bold text-black mt-4'>
                FILTRAR COMUNIDADES POR:</h2>
            <div className='text-white flex flex-wrap justify-start items-center gap-2 pl-4 py-2 pb-6'>
                <ProjectTag 
                    onClick={handleTagChange}
                    name="All" 
                    isSelected={tags.has("All")} 
                />
                <ProjectTag 
                    onClick={handleTagChange}
                    name="Grados" 
                    isSelected={tags.has("Grados")} 
                />
                <ProjectTag 
                    onClick={handleTagChange}
                    name="Ciclos" 
                    isSelected={tags.has("Ciclos")} 
                />
                <ProjectTag 
                    onClick={handleTagChange}
                    name="Clubes" 
                    isSelected={tags.has("Clubes")} 
                />
                <ProjectTag 
                    onClick={handleTagChange}
                    name="Postgrados" 
                    isSelected={tags.has("Postgrados")} 
                />
                <ProjectTag 
                    onClick={handleTagChange}
                    name="INSO" 
                    isSelected={tags.has("INSO")} 
                />        
            </div>
        </div>
        <ul ref={ref} className="grid md:grid-cols-4 gap-8 md:gap-12 mt-4   ">
            {filteredProjects.map((project, index) => (
                
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                    id={project.id}
                />
        
            ))} 
        </ul>
    </>
  )
}

export default ProjectsSection