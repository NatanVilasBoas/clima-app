import CityProvider from "./context/Clima";
import AppRoutes from "./routes";


function App() {
  return (
    <CityProvider>
      <AppRoutes />
    </CityProvider>
  );
}

export default App;
