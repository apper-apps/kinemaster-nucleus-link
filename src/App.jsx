import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/organisms/Layout'
import Home from '@/components/pages/Home'
import PCGuide from '@/components/pages/PCGuide'
import IOSGuide from '@/components/pages/IOSGuide'
import OldVersions from '@/components/pages/OldVersions'
import Blog from '@/components/pages/Blog'
import BlogPost from '@/components/pages/BlogPost'
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import FAQ from '@/components/pages/FAQ'
import Privacy from '@/components/pages/Privacy'
import Terms from '@/components/pages/Terms'
import Search from '@/components/pages/Search'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pc-guide" element={<PCGuide />} />
            <Route path="/ios-guide" element={<IOSGuide />} />
            <Route path="/old-versions" element={<OldVersions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Layout>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  )
}

export default App