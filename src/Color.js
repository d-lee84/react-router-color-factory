import { Link, useParams, Redirect } from "react-router-dom";

/** Color page
 * 
 * Props: getColor - function to get color data given a name
 * 
 * Params: color - color name
 */

function Color({getColor}) {
  const { color } = useParams();

  let colorData = getColor(color);

  if (colorData === undefined) {
    return <Redirect to="/colors" />;
  }

  let style = {
    backgroundColor:colorData.color
  }

  return (
    <div style={style}>
      <h1>Color is: {colorData.name}</h1>
      <Link to="/colors">Go back to main page!</Link>
    </div>
  )
}

export default Color;