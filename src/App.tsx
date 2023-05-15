import { Command } from "cmdk";
import "./App.css";


function App() {
  return (
      <Command className="raycast">
        <Command.Input autoFocus placeholder="Search for apps and commands..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Applications">
            <Command.Item>Google Chrome</Command.Item>
            <Command.Item>Safari</Command.Item>
            <Command.Item>Hyper</Command.Item>
            <Command.Item>Notion</Command.Item>
            <Command.Item>Spotify</Command.Item>
          </Command.Group>

          <Command.Group heading="Commands">
            <Command.Item>New Note</Command.Item>
            <Command.Item>Volume</Command.Item>
            <Command.Item>Shut Down</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    );
}

export default App;
