import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Promo from "./components/Promo/Promo";
import Sale from "./components/Sale/Sale";

function App() {
   return (
      <>
         <Header />
         <Promo />
         <Brands />
         <NewArrivals />
         <Sale />
      </>
   );
}

export default App;
