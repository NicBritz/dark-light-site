import {
  FaBuilding,
  FaGem,
  FaMoon,
  FaRegSun,
  FaSwatchbook,
  FaWaveSquare,
  FaTree,
  FaBottleWater,
  FaCanadianMapleLeaf,
  FaSnowman,
} from "react-icons/fa6";
import {
  GiBee,
  GiCupcake,
  GiCyberEye,
  GiGardeningShears,
  GiOfficeChair,
  GiPumpkinMask,
  GiFairyWand,
  GiWireframeGlobe,
  GiStarSwirl,
  GiVampireDracula,
  GiCoffeeCup,
} from "react-icons/gi";
// @ts-ignore
import cookieCutter from "cookie-cutter";

export function ThemeSwitcher() {
  const changeTheme = (newTheme: string) => {
    cookieCutter.set("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost rounded-btn">
        <FaSwatchbook />
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        <li>
          <button onClick={() => changeTheme("light")}>
            <FaRegSun className="text-accent" />
            Light
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("dark")}>
            <FaMoon className="text-accent" />
            Dark
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("cupcake")}>
            <GiCupcake className="text-accent" />
            Cupcake
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("bumblebee")}>
            <GiBee className="text-accent" />
            Bumblebee
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("emerald")}>
            <FaGem className="text-accent" />
            Emerald
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("corporate")}>
            <GiOfficeChair className="text-accent" />
            Corporate
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("synthwave")}>
            <FaWaveSquare className="text-accent" />
            Synthwave
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("cyberpunk")}>
            <GiCyberEye className="text-accent" />
            Cyberpunk
          </button>
        </li>

        <li>
          <button onClick={() => changeTheme("halloween")}>
            <GiPumpkinMask className="text-accent" />
            Halloween
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("garden")}>
            <GiGardeningShears className="text-accent" />
            Garden
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("forest")}>
            <FaTree className="text-accent" />
            Forest
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("aqua")}>
            <FaBottleWater className="text-accent" />
            Aqua
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("fantasy")}>
            <GiFairyWand className="text-accent" />
            Fantasy
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("wireframe")}>
            <GiWireframeGlobe className="text-accent" />
            Wireframe
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("dracula")}>
            <GiVampireDracula className="text-accent" />
            Dracula
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("autumn")}>
            <FaCanadianMapleLeaf className="text-accent" />
            Autumn
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("business")}>
            <FaBuilding className="text-accent" />
            Business
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("night")}>
            <GiStarSwirl className="text-accent" />
            Night
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("coffee")}>
            <GiCoffeeCup className="text-accent" />
            Coffee
          </button>
        </li>
        <li>
          <button onClick={() => changeTheme("winter")}>
            <FaSnowman className="text-accent" />
            Winter
          </button>
        </li>
      </ul>
    </div>
  );
}
