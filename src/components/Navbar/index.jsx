const Navbar = () => {
  return (
    <div className="navbar bg-green-900 text-white max-h-3 p-0">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case ms-2 text-3xl">Reeco</a>
        <div className="ms-14 font-normal hover:font-bold hover:cursor-pointer">
          Store
        </div>
        <div className="ms-14 font-normal hover:font-bold hover:cursor-pointer">
          Orders
        </div>
        <div className="ms-14 font-normal hover:font-bold hover:cursor-pointer">
          Analytics
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-normal hover:font-bold hover:cursor-pointer hover:text-white">
              Basket
            </a>
          </li>
          <li className="me-14 font-normal hover:font-bold hover:cursor-pointer hover:text-white">
            <details>
              <summary className="font-normal hover:font-bold hover:cursor-pointer hover:text-white">
                Hello, James
              </summary>
              {/* <ul className="p-2 w-44 bg-slate-500 hover:text-white">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul> */}
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
