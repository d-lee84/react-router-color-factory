import { useState } from "react";
import { useHistory } from "react-router-dom";


/** ColorPicker Component
 * 
 *  Prop:
 *  - onSubmit: Function to call when the form is submitted
 * 
 *  State:
 *  - formData: Object containing the current state of the form
 * 
 *  App -> ColorPicker
 */

function ColorPicker({ onSubmit }) {
  const [formData, setFormData] = useState({ name: "", color: "#000000" });
  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
    history.push("/colors");
  }

  function onChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  return (
    <div className="ColorPicker">
      <h1>Add a color!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={formData.name}
          onChange={onChange}
          name="name"
        />
        <input
          type="color"
          value={formData.color}
          onChange={onChange}
          name="color"
        />
        <button>Submit!</button>
      </form>
    </div>
  )
}

export default ColorPicker;