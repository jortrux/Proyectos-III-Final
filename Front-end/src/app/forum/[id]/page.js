"use client";
import React, { useEffect, useState } from 'react';

const projectsData = [
    {
        id: 1,
        title: "Foro de Diseño Digital",
        description: "Un foro comunitario para diseñadores digitales para discutir tendencias, técnicas y herramientas, así como compartir recursos e inspiración para proyectos de diseño digital.",
        imgUrl: "/1.png",
        tag: ["All", "Diseño"],
    },
    {
        id: 2,
        title: "Discusión de UI/UX",
        description: "Participa en conversaciones sobre principios de diseño de interfaz de usuario y experiencia de usuario.",
        imgUrl: "/2.png",
        tag: ["All", "UI/UX", "Diseño Web"],
    },
    {
        id: 3,
        title: "Rincón de Diseño Gráfico",
        description: "Conéctate con otros diseñadores gráficos y comparte consejos, recursos e inspiración.",
        imgUrl: "/3.png",
        tag: ["All", "Diseño Gráfico"],
    },
    {
        id: 4,
        title: "Preguntas y Respuestas de Diseño Web",
        description: "Haz preguntas, busca consejos e intercambia conocimientos sobre las mejores prácticas de diseño web.",
        imgUrl: "/4.png",
        tag: ["All", "Diseño Web"],
    },
    {
        id: 5,
        title: "Centro de Motion Graphics",
        description: "Explora el mundo de los motion graphics, técnicas de animación y efectos visuales.",
        imgUrl: "/5.png",
        tag: ["All", "Motion Graphics"],
    },
    {
        id: 6,
        title: "Galería de Arte Digital",
        description: "Muestra tu arte digital, recibe comentarios y descubre nuevos talentos.",
        imgUrl: "/6.png",
        tag: ["All", "Arte Digital"],
    },
];

const forumPosts = [
    {
        id: 1,
        user: "MANOLO GARCÍA",
        content: "¿Alguien ha visto la última película de Tarantino? ¡Necesito debatir ese final!",
        imgUrl: "/1.png",
    },
    {
        id: 2,
        user: "ELISA RODRÍGUEZ",
        content: "¿Alguien tiene recomendaciones de películas de ciencia ficción? ¡Estoy buscando algo nuevo!",
    },
    {
        id: 3,
        user: "MARTA PETER",
        content: "¡Claro! Te recomendaría 'Blade Runner 2049'.",
        replyTo: 2,
    },
    {
        id: 4,
        user: "LUIS ALONSO",
        content: "¡Sí! 'Interstellar' es muy buena.",
        replyTo: 2,
    },
    {
        id: 5,
        user: "ALFREDO DURO",
        content: "¿Alguien más emocionado por el próximo lanzamiento de Marvel?",
    },
];

export default function Comunidad() {
    const [project, setProject] = useState(null);

    useEffect(() => {
        const pathname = window.location.pathname;
        const id = pathname.split('/').pop();
        const foundProject = projectsData.find(project => project.id === parseInt(id));
        
        if (foundProject) {
            setProject(foundProject);
        }
    }, []);

    if (!project) {
        return <h1>Loading...</h1>; // Muestra "Cargando..." mientras se obtiene el proyecto
    }

    const renderPost = (post) => (
        <div key={post.id} className="border-b-2 border-gray-300 pb-4">
            <h2 className="font-bold text-black">{post.user}</h2>
            <p className="text-black">{post.content}</p>
        </div>
    );

    return (
        <main className="flex min-h-screen flex-col bg-[#ffffff]">
            <div className="grid grid-cols-3 border-t-2 border-gray-400 mt-24 px-20 h-screen">
                <div className="col-span-1 border-r-2 pt-8 pr-8 border-gray-400">
                    <h1 className="text-black font-Montserrat font-extrabold text-5xl">
                        {project.title}
                    </h1>
                    <p className="text-l font-Montserrat font-semibold text-black mt-12 pr-8">
                        {project.title} <span className="text-blue-600 font-Montserrat font-semibold"> - Comunidad de Diseño Digital</span>
                    </p>   
                    <p className="text-l font-Montserrat text-black mt-4 pr-8">
                        {project.description}
                    </p>
                </div>
                <div className="col-span-2 pt-8">
                    <div className="flex flex-col space-y-4">
                        {forumPosts.filter(post => !post.replyTo).map(post => (
                            <div key={post.id}>
                                {renderPost(post)}
                                {forumPosts.filter(reply => reply.replyTo === post.id).map(renderPost)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
