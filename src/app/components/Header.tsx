const Header = () => {
  return (
    <header className="flex fixed
     justify-center
      top-0
       right-0
        w-full
         bg-white
         py-3
         ">
      <div className="mx-auto flex items-center justify-between w-11/12 gap-52">
        <div>
            <a>
                <img
                  src="/assets/logo.png"
                  alt="Company Logo"
                  className="max-w-36"
                />
            </a>
        </div>
        <div className="w-4/5">
            <input  className=" rounded bg-gray-200 w-full p-2 outline-none"
             placeholder="Search...">

            </input>
        </div>
        <div>Carrinho</div>
      </div>
    </header>
  );
};

export default Header;