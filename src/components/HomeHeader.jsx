import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h1 className="text-3xl font-bold">Products</h1>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <Link to={"/create-new"}>
            <button className="btn bg-blue-500 px-4 py-2 rounded-md text-white">
              Create New
            </button>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:flex gap-5">
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/a/ACg8ocJ4zApQeKutxDtCi0hXDcCPHxLl4GDJOyO_8iCuajC4Rw=s288-c-no"
                alt=""
              />
            </div>
            <div className="flex items-center gap-x-3">
              <div>
                <h2 className="font-bold">Raju Ahmmed</h2>
                <p>user</p>
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ4zApQeKutxDtCi0hXDcCPHxLl4GDJOyO_8iCuajC4Rw=s288-c-no"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Raju Ahmmed
                </a>
              </li>
              <li>
                <a>User</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
