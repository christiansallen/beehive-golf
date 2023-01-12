import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CourseMapContainer } from "./components/CourseMap/CourseMapContainer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <CourseMapContainer />
    </div>
  );
}

export default App;
