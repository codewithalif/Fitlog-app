

import HeroSection from "./components/Hero/HeroSection";
import CartSection from "./equipmant/page";


export default function Home() {
  return (
    <>
      
     <HeroSection/>
      <div id="CartItem">
        <CartSection/>
      </div>
      
    </>
  );
}