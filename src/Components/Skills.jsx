import {SKILLS} from '../Utils/util.js'
function Skills() {
    return (
        <section className="px-5 md:px-10 py-5">
            <h4 className='font-semibold text-lg text-white py-3'>What I know</h4>
            <div className="bg-secondry p-4 rounded flex flex-wrap justify-evenly items-center gap-8">
                {SKILLS.map((skills) => <img className="w-12" src={skills} alt={skills} key={skills} />)}
            </div>
        </section>
    )
}
export default Skills
