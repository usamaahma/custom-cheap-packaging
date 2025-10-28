import Header1 from "./components/headers/header1";
import Header2 from "./components/headers/header2";
import Contact from "./pages/contactus";
import Home1 from "./pages/home";

export default function Home() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Home1 />
      <Contact />
    </div>
  );
}
