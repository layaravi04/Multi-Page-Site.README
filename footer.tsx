import Link from "next/link"
import { Heart, Github, Twitter, Linkedin, Instagram } from "lucide-react"
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Cherry</h3>
            <p className="text-pink-100 mb-4 max-w-md">
              Creating beautiful digital experiences with passion and innovation. Let's build something amazing
              together.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-pink-100 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-pink-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-pink-100 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-pink-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-pink-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-pink-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-pink-100 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-pink-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-pink-100">Web Development</span>
              </li>
              <li>
                <span className="text-pink-100">Mobile Apps</span>
              </li>
              <li>
                <span className="text-pink-100">UI/UX Design</span>
              </li>
              <li>
                <span className="text-pink-100">Consulting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-400 mt-8 pt-8 text-center">
          <p className="text-pink-100 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 fill-current" /> by Cherry
          </p>
          <p className="text-pink-200 text-sm mt-2">© 2024 Cherry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
