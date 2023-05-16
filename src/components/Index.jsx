import { Link } from 'react-router-dom';
import Footer from './components/Footer';

function About() {
    return (
      <div>
          <h1>Create Your VERY OWN Todolist!</h1>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Footer />
      </div>
    )
}
  
export default About;