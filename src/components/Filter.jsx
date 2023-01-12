import Box from "@mui/material/Box"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const Filter = ({ onSubmit }) => {
  return (
    <Box
      className="BoxFilter"
      // sx={{ width: 600, height: 80, marginBottom: "40px" }}
    >
      <p> Filter by keywords</p>

      <Box className="BoxForm" component="form" onSubmit={onSubmit}>
        <TextField
          placeholder="Search"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <button type="submit">
                  <SearchRoundedIcon />
                </button>
              </InputAdornment>
            ),
          }}
          // sx={{ width: 600, height: 50 }}
        ></TextField>
      </Box>
    </Box>
  )
}

export default Filter
