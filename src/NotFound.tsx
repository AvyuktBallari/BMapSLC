import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen">
    <Navbar />
    <div className="text-center s max-w-5xl mx-auto text-gray-400  flex-grow max-h ">
    <h1 className="text-9xl mt-40">404!</h1>
    <h2 className="mt-5 text-2xl mb-5 ">Page not found!</h2>
    <a  className="text-2xl text-white" href="/"> Go to Home?</a>
    </div>
    <Footer />
    </div>  
 )
}

export default NotFound