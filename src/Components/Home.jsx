import React from 'react'

import Skills from './Skills'
import MoreProject from './MoreProject'
import Project from './Project'
import Banner from './Banner'


function Home() {
    return (
        <div className="main w-full bg-[#151312]">
            <Banner />
            <Project />
            <Skills />
            <MoreProject />
        </div>
    )
}

export default Home