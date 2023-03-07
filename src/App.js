import logo from "./logo.svg"
import "./App.css"
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"

function App() {
  return (
    <div className="App">
      <Button>DEFAULT</Button>
      <Button variant="outlined">OUTLINED</Button>
      <Button variant="contained">CONTAINED</Button>
      <Button variant="contained" color="secondary">
        SECONDARY
      </Button>
      <Button variant="contained" color="success">
        SUCCESS
      </Button>
      <Button variant="contained" color="error">
        ERROR
      </Button>
      <Button variant="contained" color="error" size="small">
        SMALL
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        startIcon={<DeleteIcon />}
      >
        DELETE
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        startIcon={<DeleteIcon />}
      ></Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        endIcon={<DeleteIcon />}
      >
        DELETE
      </Button>
    </div>
  )
}

export default App
