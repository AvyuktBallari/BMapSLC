import { Search } from "lucide-react"
import { RoughNotation } from "react-rough-notation";
import Navbar from "./components/Navbar"
const companies = [
  {
    name: "Sample House",
    linkname: "techfairhome",
    description: "A demo house for testing",
  },
  {
    name: "Fine Cuts",
    linkname: "tilestore",
    description: "Real store demo",
  },
]
const Dashboard = () => {
  return (
    <div className="font-inter text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-6xl text-[#cdd3d1] md:text-8xl font-inter font-bold text-center mt-20 mb-8">
          Transport{" "}
          <br /> <span className="text-5xl md:text-8xl">
            <RoughNotation
              animate={false}
              type="highlight"
              show={true}
              color="#141f35"
            >
              Made Easy
            </RoughNotation>
            </span>
        </h1>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for maps..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#201a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-1000 focus:ring-[#332a2a]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companies.map((company) => (
            <div key={company.name} className="bg-[#201a1a] border border-[#332a2a] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
              <p className="text-gray-400 mb-4">{company.description}</p>
              <p className="mb-4">Access kitchen, stairs, living room, and garage data.</p>
              <a href={`/map/${company.linkname}`} className="bg-white text-black hover:cursor-pointer font-semibold py-2 px-4 rounded">
                View Map
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Dashboard

