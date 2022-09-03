import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Center from './centres';

const Location = () => {

const [selected, setSelected] = React.useState("");
const showCenter =()=>{
  <Center />
};

const changeSelectOptionHandler = (event) => {
	setSelected(event.target.value);
};

const delhi = [
	"East Delhi",
	"New Delhi",
	"North Delhi",
  "South Delhi",
];
const language = ["C++", "Java", "Python", "C#"];
const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];

let type = null;

let options = null;
if (selected === "Delhi") {
	type = delhi;
} else if (selected === "Language") {
	type = language;
} else if (selected === "Data Structure") {
	type = dataStructure;
}

if (type) {
	options = type.map((el) => <option key={el}>{el}</option>);
}

const [show,setshow]= React.useState(false);


return (
  <div>
	<div
	style={{
		padding: "16px",
		margin: "16px",
	}}
	>
	<FormControl >
		<div>

		<select labelId="demo-simple-select-label"
             id="demo-simple-select"
             label="State" onChange={changeSelectOptionHandler}>
			<option>Choose...</option>
			<option>Delhi</option>
		</select>
		</div>
		<div>
		<select>
			{
			options
			}
		</select>
		</div>
    </FormControl>
	</div>
     
       <button class="btn btn-primary"onClick={()=> setshow(!show)}>Select</button>
       {show && <Center/>}
	  
       </div>
);
};

export default Location;

