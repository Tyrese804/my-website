import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Vue"]

    const backendSkills = ["Python", "Java", "C", "C++", "NodeJS", "Flask", "MongoDB"]


    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="glass rounded-xlp-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-4 pt-4 px-4">
                    Passionate developer with expertise in building scalable web applications and creating innovative solutions. 
                    I also have experience working across the stack, including backend development, game development, and system 
                    design — bringing a versatile and creative approach to every project.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {frontendSkills.map((tech) => (
                                    <span className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transtion">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {backendSkills.map((tech) => (
                                    <span className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transtion">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.S. in Compiuter Science </strong> - Virginia Commonwealth University (2021-2024)
                            </li>
                            <li>
                                Relevant Coursework: Intro to Programming, Data Structures and Algorithms, Computer Systems, Intro to Discrete Structures, Computer Organization, Intro to Theory of Computation, Fundamentals of Software Engineering, Web Development
                            </li>
                        </ul>

                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Work Experience
                        </h3>

                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold underline">
                                    Technology Analyst at Wells Fargo (2024 - present)
                                </h4>
                                <p>
                                Contributed to modernizing a large legacy application by converting it to a component-based UI, streamlining the process for implementing future updates. 
                                Also, enhanced application performance through memorization, added key functionalities, and ensured UI alignment with Figma designs.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold underline">
                                    Research Assistant at VCU (2023 - 2024)
                                </h4>
                                <p>
                                Developed a Python application to perform over 1,000 of calculations based on various parameters, automating a previously manual process of generating Excel files and storing data for input into a machine learning application.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            </RevealOnScroll>
        </section>
    );
};