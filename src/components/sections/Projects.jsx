import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transtion">
                        <h3 className="text-xl font-bold mb-2">
                            AI Chatbot
                        </h3>
                        <p className="text-gray-400 mb-4">
                        Created an intelligent AI chatbot using neural networks and 
                        natural language processing in Python to provide accurate responses to user inquiries about me.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                            {["Python", "Natural Language Processing", "Json"].map((tech, key) => (
                                <span className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transtion-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between justify-center">
                            <a href="https://github.com/Tyrese804/AI-Chatbot" target="_blank" className="text-red-400 hover:text-red-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transtion">
                        <h3 className="text-xl font-bold mb-2">
                            Pong
                        </h3>
                        <p className="text-gray-400 mb-4">
                        Developed a multiplayer Pong game using the PyGame library in Python.
                        Implemented collision handling and utilized concise and scalable code for an enjoyable gaming experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                            {["Python", "PyGame"].map((tech, key) => (
                                <span className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transtion-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between justify-center">
                            <a href="https://github.com/Tyrese804/Pong-Game" target="_blank" className="text-red-400 hover:text-red-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};