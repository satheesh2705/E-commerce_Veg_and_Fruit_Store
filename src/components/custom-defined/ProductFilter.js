import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const fiterBoxStyle = { minWidth: 80, maxWidth: 150, maxHeight: 25, mb:"5%" };

  return (
    <Box sx={fiterBoxStyle}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{ color: "green" }}>
          Product
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Product"
          onChange={handleChange}
        >
          <MenuItem value={10}>Vegetables</MenuItem>
          <MenuItem value={20}>Fruit</MenuItem>
          <MenuItem value={30}>Grocerriec</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
