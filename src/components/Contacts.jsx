



function Contacts() {
    return (
        <>
            <section id="contact" class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-2 gradient-text">Let's Connect 🚀</h2>
                    <p class="text-center text-gray-600 mb-12">If you liked my portfolio, don't hesitate to reach out!</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div class="bg-gray-50 p-8 rounded-2xl shadow-lg">
                            <h3 class="text-2xl font-bold mb-6">Send Me a Message</h3>
                            <form class="space-y-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                    <textarea id="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                                </div>
                                <button type="submit" class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    Send Message ➤
                                </button>
                            </form>
                        </div>

                        <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-lg text-white">
                            <h3 class="text-2xl font-bold mb-6">Find Me On</h3>
                            <div class="space-y-4">
                                <a href="https://linkedin.com/in/adityakokashe" target="_blank" class="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition">
                                    <i class="fab fa-linkedin-in text-2xl mr-4"></i>
                                    <div>
                                        <h4 class="font-bold">LinkedIn</h4>
                                        <p class="text-sm opacity-80">@adityakokashe</p>
                                    </div>
                                </a>
                                <a href="https://github.com/imperio07adi" target="_blank" class="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition">
                                    <i class="fab fa-github text-2xl mr-4"></i>
                                    <div>
                                        <h4 class="font-bold">GitHub</h4>
                                        <p class="text-sm opacity-80">@imperio07adi</p>
                                    </div>
                                </a>
                                <a href="https://twitter.com/adityakokashe" target="_blank" class="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition">
                                    <i class="fab fa-twitter text-2xl mr-4"></i>
                                    <div>
                                        <h4 class="font-bold">Twitter</h4>
                                        <p class="text-sm opacity-80">@adityakokashe</p>
                                    </div>
                                </a>
                                <a href="mailto:adityakokashe" class="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition">
                                    <i class="fas fa-envelope text-2xl mr-4"></i>
                                    <div>
                                        <h4 class="font-bold">Email</h4>
                                        <p class="text-sm opacity-80">adityakokashe</p>
                                    </div>
                                </a>
                            </div>

                            <div class="mt-8 pt-6 border-t border-white/20">
                                <h4 class="font-bold mb-4">Suit up — you're right where the adventure begins.🎮💻🚀🔥</h4>
                                <p class="text-sm opacity-90">Hi! I'm Aditya. This is where I make stuff on the web &lt;3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Contacts