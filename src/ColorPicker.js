import {useState} from "react";
import {useHistory} from "react-router-dom";


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

function ColorPicker({onSubmit}) {
  const [formData, setFormData] = useState({name: "", color: "#000000"});
  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
    history.push("/colors");
  }

  function onChange(evt) {
    const {name, value} = evt.target;
    setFormData()
  }
}

export default ColorPicker