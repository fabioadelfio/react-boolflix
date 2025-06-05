import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import { AppProvider } from "./contexts/AppContext";

export default function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </>
  );
}
