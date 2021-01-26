
import { Link } from "react-router-dom";


/** Home Component
 * 
 *  Props:
 *  - colors: Array of color objects
 *    [{name, colorCode}, ...]
 */

function Home({ colors }) {
  
  /** Helper function to render the colors */
  function renderColors() {
    return colors.map(c => (
      <div key={c.name}><Link to={`/colors/${c.name}`}>{c.name}</Link></div>
    ));
  }

  return (
    <div className="Home">
      <div className="Home-header">
        <h3>This is our color factory!</h3>
        <Link to="colors/new" >Add a color here!</Link>
      </div>
      <div>
        Please select a color.
        {renderColors()}
      </div>
    </div>
  )
}

export default Home