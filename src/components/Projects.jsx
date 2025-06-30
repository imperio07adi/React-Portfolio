



function Projects() {

    return (
        <>
            <section id="projects" class="py-20 bg-gradient-to-b from-white to-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">My Projects</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out">
                            <div class="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                <i class="fas fa-question-circle text-white text-6xl"></i>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2">CrackItNow</h3>
                                <p class="text-gray-600 mb-4">A question-answer bank for company interviews.</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">HTML</span>
                                    <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">CSS</span>
                                    <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                                    <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">JavaScript</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">2025</span>
                                    <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">Git Repository →</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out">
                            <div class="h-48 bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center">
                                <i class="fas fa-mask text-white text-6xl"></i>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2">Marvel Dictionary</h3>
                                <p class="text-gray-600 mb-4">A Marvel API dictionary providing details on Marvel characters.</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">HTML</span>
                                    <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">CSS</span>
                                    <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Marvel API</span>
                                    <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">JavaScript</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">2024</span>
                                    <a href="#" class="text-red-600 hover:text-red-800 text-sm font-medium">Git Repository →</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out">
                            <div class="h-48 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                                <i class="fas fa-gamepad text-white text-6xl"></i>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2">MiniOpera</h3>
                                <p class="text-gray-600 mb-4">Multiplayer Tic-Tac-Toe game.</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">React</span>
                                    <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">JavaScript</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">2024</span>
                                    <a href="#" class="text-green-600 hover:text-green-800 text-sm font-medium">Git Repository →</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out">
                            <div class="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <i class="fas fa-paint-brush text-white text-6xl"></i>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2">StyleCraft</h3>
                                <p class="text-gray-600 mb-4">Unique collection of interactive, experimental, and aesthetic CSS-only designs.</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">HTML</span>
                                    <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">TailwindCSS</span>
                                    <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">JavaScript</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">2025</span>
                                    <a href="#" class="text-purple-600 hover:text-purple-800 text-sm font-medium">Git Repository →</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out">
                            <div class="h-48 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                                <i class="fas fa-file-alt text-white text-6xl"></i>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2">Resume Maker</h3>
                                <p class="text-gray-600 mb-4">A resume making web app.</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">React</span>
                                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">JavaScript</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">2025</span>
                                    <a href="#" class="text-yellow-600 hover:text-yellow-800 text-sm font-medium">Git Repository →</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out">
                            <div class="h-48 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                                <i class="fas fa-heartbeat text-white text-6xl"></i>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2">WellCare</h3>
                                <p class="text-gray-600 mb-4">A portal for patients to book appointments with doctors.</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">MERN Stack</span>
                                    <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">MongoDB</span>
                                    <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Express</span>
                                    <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">React</span>
                                    <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Node.js</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">2025</span>
                                    <a href="#" class="text-pink-600 hover:text-pink-800 text-sm font-medium">Git Repository →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12 text-center">
                        <p class="text-gray-600 mb-6">🔭 Check out more of my projects on GitHub!</p>
                        <a href="https://github.com/imperio07adi" target="_blank" class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition inline-flex items-center">
                            <i class="fab fa-github mr-2"></i> Visit My GitHub
                        </a>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Projects;