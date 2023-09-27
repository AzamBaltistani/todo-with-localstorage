import RouteLists from "./RouteLists";
import ThemeToogleBtn from "./ThemeToogleBtn";
import { AiFillGithub } from "react-icons/ai";
const Header = ({ children }) => {
  const routes = [
    {
      name: "GitHub",
      url: "https://github.com/AzamBaltistani/todo-with-localstorage.git",
      icon: <AiFillGithub size={20} />,
    },
  ];
  return (
    <div className="container flex justify-center mx-auto flex-col">
      <div className="h-12 sticky top-0 bg-opacity-90 dark:bg-opacity-80 transition-all z-10 flex px-2 justify-between items-center bg-green-800 dark:bg-neutral-900">
        <RouteLists routes={routes} />
        <ThemeToogleBtn />
      </div>
      {children}
    </div>
  );
};

export default Header;
