import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function SimpleSelect() {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return(<>
    <FormControl style={{width: '100%'}} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Select State</InputLabel>
        <Select
        margin="dense"
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={state}
        onChange={handleChange}
        label="Select State"
        >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>  
  </>)
}
