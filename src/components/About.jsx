import { Link } from 'react-router-dom'

function About() {
    return (
      <div>
          <h4>Version 1.0.0</h4>
          <span>made with ❤️ by <a href="https://borjamarti.netlify.app/">borjaMartí</a></span>
          <Link to="/">Go Back</Link>
      </div>
    )
  }
  
export default About