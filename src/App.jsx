import "./App.css";
import MapComponent from "./MapComponent";
import districtData from "./district.json";

function App() {
  return (
    <div>
      <MapComponent districtData={districtData} />
    </div>
  );
}

export default App;
