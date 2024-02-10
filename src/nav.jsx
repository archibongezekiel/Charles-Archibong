import { useState } from "react";
import "./index.css";
import image from "./logo.png";
export function NavBar() {
  const [menuHidden, setMenuHidden] = useState("menu");
  const [boolean, setBoolean] = useState(false);
  const content = ["Companies", "About", "Contact"];
  const mapContent = content.map((con) => (
    <li className="navText  " key={con}>
      {con}
    </li>
  ));
  //
  // DROPDOWN MENU CONTENT
  const dropContent = ["Companies", "About", "Contact"];
  const mapDropContent = dropContent.map((con) => (
    <li className="border-b-2 border-borderColor cursor-pointer mt-2" key={con}>
      {con}
    </li>
  ));
  //  DROP MENU CLICK
  const changeMenu = () => {
    menuHidden === "menu" ? setMenuHidden("close") : setMenuHidden("menu");
    setBoolean((boolean) => !boolean);
  };
  return (
    <>
      <nav>
        <header className="flex items-center  justify-around  shadow-md  shadow-gray-100 p-2 min-[200px]: ">
          <div>
            <img src={image} alt="page logo" className="w-10 lg:w-20" />
          </div>
          <div>
            <ul className="lg:flex font-bold  min-[220px]:hidden">
              {mapContent}
            </ul>
          </div>
          {/* nav menu */}
          <div>
            <span className="lg:hidden md:inline-block" onClick={changeMenu}>
              <span
                class="material-symbols-outlined"
                style={{ fontSize: "45px" }}
              >
                {menuHidden}
              </span>
            </span>
          </div>
          {/* drop menu */}
          {boolean && (
            <div className="absolute  right-10 top-20 bg-white shadow-md w-40 p-5 md:hidden">
              <ul className="w-dropMenuWidth m-auto text-center">
                {mapDropContent}
              </ul>
            </div>
          )}
        </header>
      </nav>
    </>
  );
}
