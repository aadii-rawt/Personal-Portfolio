import React from 'react'

function Skills() {
    const items = [
        {
            icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", // Replace with the actual icon URLs
            title: "React",
            subtitle: "JS Library",
        },
        {
            icon: "https://framerusercontent.com/images/MnQFYNLxlgT4EvY2ctcJfHAXZA.png",
            title: "Nextjs",
            subtitle: "React Framework",
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s",
            title: "Nodejs",
            subtitle: "JS Runtime Environment",
        },
        {
            icon: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png",
            title: "MongoDB",
            subtitle: "Database",
        },
        {
            icon: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
            title: "Firebase",
            subtitle: "SaaS",
        },
        {
            icon: "https://img.icons8.com/color/512/redux.png",
            title: "Redux",
            subtitle: "State Management",
        },
        {
            icon: "https://images.seeklogo.com/logo-png/43/2/react-query-logo-png_seeklogo-435661.png",
            title: "React Query",
            subtitle: "API Calls",
        },
        {
            icon: "https://cdn.iconscout.com/icon/free/png-256/free-postgresql-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175119.png?f=webp",
            title: "Postgres",
            subtitle: "Database",
        },

        {
            icon: "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png",
            title: "JWT",
            subtitle: "Authentication",
        },

        {
            icon: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3628992-3030217.png?f=webp",
            title: "postman",
            subtitle: "API Testing",
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s",
            title: "Tailwind",
            subtitle: " CSS framework",
        },
        {
            icon: "https://framerusercontent.com/images/SvTAZZonMqViqF7fP6GK7CWmL84.png",
            title: "Figma",
            subtitle: "Design Tool",
        },

    ];
    return (
        <div className=''>
            <div>
                <h1 className='text-5xl text-center md:text-left lg:text-8xl font-extrabold uppercase font-poppins'>PREMIUM
                    <span className='text-[#353334]'> TOOLS</span></h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 my-5">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex space-x-4 hover:bg-[#1C1A19]  p-4 rounded-lg "
                    >
                        <div className='w-16 h-16 rounded-lg bg-white flex items-center justify-center'>
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-14 h-14 rounded-lg object-center "
                            />

                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className=" mt-1 text-[#998F8F]">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills