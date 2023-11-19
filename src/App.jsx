import { Menu } from "./components/menu";
import { Home } from "./pages/home";

export function App() {
  return (
    <>
      <div style={{paddingBottom: '4rem'}}>
        <Menu />
      </div>
      <Home />
    </>
  );
}
