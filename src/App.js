import CityProvider from "./context/City";
import AppRoutes from "./routes";


function App() {
  return (
    <CityProvider>
      <AppRoutes />
    </CityProvider>
  );
}

export default App;
