import { useState , useRef} from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export default function SearchPopup({ name, arr }) {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null); 
  function waitForDelayAndRun() {
    setTimeout(() => {
      if (isOpen) setTimeout(() => setOpen(false), 50);
    }, 50);
  }
  useClickOutside(menuRef, () => {
    waitForDelayAndRun();
  });

  let scroll = arr.length > 3 ? 1 : 0

  return (
    <>
      <div className="range__buttons">
        <div className="filter__button button-author _btn-text" onClick={() => setOpen(!isOpen)}>
          {name}
        </div>
        <nav className={`search__pop_menu ${isOpen ? "active" : ""}`} ref={menuRef}>
          <ul className={`menu__list_track ${scroll ? "pop__menu_find" : ""}`}>
            {arr.map((item, index) => (
              <li key={index} className="menu__item">{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
