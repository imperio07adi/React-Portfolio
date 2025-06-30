


function Hero() {

    return (
        <>
            <section class="min-h-screen flex items-center pt-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div class="text-2xl md:text-4xl font-mono bg-gray-100 p-2 rounded inline-block mb-4 typewriter">
                                welcome@portfolio:~$ whoami |
                            </div>
                            <h1 class="text-4xl md:text-6xl font-bold mb-4">Aditya Kokashe</h1>
                            <h2 class="text-2xl md:text-3xl font-semibold mb-6 gradient-text">Full Stack Developer / Student</h2>
                            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                                Hey there! ✨ Welcome to my multiverse — where innovation, ambition, and a little chaos forge the future.
                                Just like Tony Stark engineering from a cave or Peter Parker balancing life and heroics, I'm on a journey
                                to master the art of creation — from building dynamic web applications to conquering complex algorithms.
                            </p>
                            <div class="flex space-x-4">
                                <a href="#projects" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    View Projects
                                </a>
                                <a href="#contact" class="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl relative">
                                <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
                                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Coding" class="w-full h-full object-cover" />
                                <div class="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                                    <div class="text-lg font-mono">🚀 Coding my way to the future</div>
                                </div>
                            </div>
                            <div class="absolute -top-6 -right-6 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold transform rotate-6 shadow-lg">
                                Available for hire!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero