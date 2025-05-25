import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Heart } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "🌱 Soil Moisture Sensor (REM-SOLI-MOSTU)",
      description:
        "Smart IoT solution using soil moisture sensors to detect water content in real-time, helping farmers and gardeners optimize irrigation and reduce water waste through data-driven decisions.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["IoT", "Agriculture", "Sensors", "Data Analytics"],
      likes: 156,
      category: "IoT",
    },
    {
      title: "🏗️ Tunnel Inspection Project",
      description:
        "Advanced monitoring system using technology to inspect tunnels for structural safety, analyzing cracks, vibrations, and environmental conditions to detect early damage signs and prevent accidents.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Infrastructure", "Safety", "Monitoring", "Analytics"],
      likes: 203,
      category: "Infrastructure",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tech solutions that make a difference to creative expressions that feed the soul — here's a collection
            of projects that represent my journey of turning ideas into reality.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "IoT", "Infrastructure"].map((filter) => (
            <Button
              key={filter}
              variant={filter === "All" ? "default" : "outline"}
              className={
                filter === "All"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0"
                  : "border-pink-200 text-pink-700 hover:bg-pink-50"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-pink-600">
                    <Heart className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{project.likes}</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Collaborate?</h2>
              <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
                Whether it's a tech project, a creative endeavor, or just a good conversation about turning ideas into
                reality — I'd love to connect!
              </p>
              <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50">
                Let's Create Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
