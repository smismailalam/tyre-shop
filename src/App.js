import './App.css';
import { 
  AppLayout,
  Home,
  About,
  Blog, 
  Contact
} from "./container";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes , Route , Outlet } from "react-router-dom";

const AuthLayout = () => (
  <>
    <nav>Authenication</nav>
    <main>
      <div>
        <Outlet /> 
      </div>
    </main>
  </>
);
const Login = () => (
  <div>
    Login
  </div>
);
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />} >
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/about" element={<AppLayout />} >
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/contact" element={<AppLayout />} >
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/blog" element={<AppLayout />} >
            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="/login" element={<AuthLayout />} >
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
