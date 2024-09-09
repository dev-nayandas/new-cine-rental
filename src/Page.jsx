import { useContext } from "react";
import Footer from "./Footer";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { ThemeContext } from "./context";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <NavBar />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
