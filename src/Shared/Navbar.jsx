
import logo from "../assets/logo.png";
import { FiLayers, FiHome, FiUser, FiLogOut } from "react-icons/fi";
import { FaChartBar } from "react-icons/fa";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
// import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content h-full-screen">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className=" px-2 absolute top-0 drawer-button lg:hidden"
        >
          <AiOutlineMenuUnfold className="text-3xl" />
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-white h-full border-r  p-4 text-base-content space-y-5 relative justify-between">
          <div className="mx-5 text-xl">
            <div className="">
              <div className="w-full">
                <img className="rounded-xl" src={logo} alt="" />
              </div>
            </div>
            <Link className="flex items-center my-3 mx-5" to={"/"}>
              <span className="mr-4">
                <FiLayers />
              </span>
              Product
            </Link>
            <Link className="flex items-center my-3 mx-5" to={"portfolio"}>
              <span className="mr-4">
                <FaChartBar />
              </span>
              Analytics
            </Link>
            <Link className="flex items-center my-3 mx-5" to={"resume"}>
              <span className="mr-4">
                <PiCurrencyDollarSimple />
              </span>
              Billing
            </Link>
            <Link className="flex items-center my-3 mx-5" to={"about"}>
              <span className="mr-4">
                {" "}
                <FiHome />{" "}
              </span>
              Company
            </Link>
            <Link className="flex items-center my-3 mx-5" to={"contact"}>
              <span className="mr-4">
                <FiUser />
              </span>
              Admin
            </Link>
            <Link className="flex items-center my-3 mx-5" to={"contact"}>
              <span className="mr-4">
                <FiLogOut />
              </span>
              Logout
            </Link>
          </div>
          <div className="bg-[#e9f7fd] relative p-3 rounded-lg text-center absolute bottom-0">
            <div className="w-[60px] h-[60px] bg-white shadow-md flex justify-center items-center rounded-full absolute -top-[30px] left-1/2 -translate-x-1/2">
              <div className="w-[30px] h-[30px] bg-blue-500 rounded-full">
                <h2 className="text-xl font-bold text-white">?</h2>
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <h2 className="text-xl font-bold">Help Center</h2>
              <p>
                <small>
                  Getting trouble on Simplebook? <br /> Reach out and solve your
                  problem
                </small>
              </p>
              <button className="btn bg-blue-500 w-full shadow-md px-4 py-2 rounded-md text-white">
                Consult Now
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
