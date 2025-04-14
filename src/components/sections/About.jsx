import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "Vue", "TailwindCSS"]

    const backendSkills = ["Python", "Java", "MongoDB"]


    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="glass rounded-xlp-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web applications and creating
                        innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
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
                            <div className="flex flex-wrap gap-2">
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
                                Relevant Coursework: Data Structures, Web Development, Computational Theory, ...
                            </li>
                        </ul>

                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Work Experience
                        </h3>

                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Technology Analyst at Wells Fargo (2025 - present)
                                </h4>
                                <p>
                                    blah blah blah
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Research Assistant at VCU (2023 - 2024)
                                </h4>
                                <p>
                                    blah blah blah
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