"use client"
import {React, useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "Activity 1",
        description: "This is a description of project 1",
        imgUrl: "/1.png",
        tag: ["All", "React"],
    },
    {
        id: 2,
        title: "Activity 2",
        description: "This is a description of project 2",
        imgUrl: "/2.png",
        tag: ["All", "Node.js"],
    },
    {
        id: 3,
        title: "Activity 3",
        description: "This is a description of project 3",
        imgUrl: "/3.png",
        tag: ["All", "Vue.js"],
    },
    {
        id: 4,
        title: "Activity 4",
        description: "This is a description of project 4",
        imgUrl: "/4.png",
        tag: ["All", "React"],
    },
    {
        id: 5,
        title: "Activity 5",
        description: "This is a description of project 5",
        imgUrl: "/5.png",
        tag: ["All", "Node.js"],
    },
    {
        id: 6,
        title: "Activity 6",
        description: "This is a description of project 6",
        imgUrl: "/6.png",
        tag: ["All", "Vue.js"],
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
        <section>
            <div className='text-white flex flex-wrap justify-start items-center gap-2 py-6'>
                <h2 className='text-start text-2xl font-bold text-white'>
                    Filtrar por:
                </h2>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tags.has("All")}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="React"
                    isSelected={tags.has("React")}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Node.js"
                    isSelected={tags.has("Node.js")}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Vue.js"
                    isSelected={tags.has("Vue.js")}
                />
                
            </div>
            <h2 className='text-start text-3xl font-bold text-white mb-4'>
                Proximas Actividades
            </h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;