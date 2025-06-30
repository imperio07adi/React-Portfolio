// import '../CSS/navbar.css'


function Navbar() {

    return (
        <>

            <nav class="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex items-center">
                            <span class="text-xl font-bold gradient-text">Aditya Kokashe</span>
                        </div>
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="#about" class="text-gray-700 hover:text-blue-600 transition">About</a>
                            <a href="#education" class="text-gray-700 hover:text-blue-600 transition">Education</a>
                            <a href="#projects" class="text-gray-700 hover:text-blue-600 transition">Projects</a>
                            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
                            <a href="https://adiair.netlify.app/images/ADITYA%20KOKASHE%202C.pdf" target="_blank" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Resume
                            </a>
                        </div>
                        <div class="md:hidden flex items-center">
                            <button id="menu-btn" class="text-gray-700">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div id="mobile-menu" class="hidden md:hidden bg-white pb-4 px-4 shadow-lg">
                    <div class="flex flex-col space-y-3">
                        <a href="#about" class="text-gray-700 hover:text-blue-600 transition">About</a>
                        <a href="#education" class="text-gray-700 hover:text-blue-600 transition">Education</a>
                        <a href="#projects" class="text-gray-700 hover:text-blue-600 transition">Projects</a>
                        <a href="#contact" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
                        <a href="https://adiair.netlify.app/images/ADITYA%20KOKASHE%202C.pdf" target="_blank" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center">
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar