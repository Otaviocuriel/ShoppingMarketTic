import Input from "./input";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 z-10 flex w-full justify-center bg-[#e9e2d1] py-3">
      <div className="mx-auto flex w-[min(1100px,92%)] items-center justify-between gap-10">
        <div>
            <a href="/">
                <img
                  src="/assets/logo.png"
                  alt="Company Logo"
                  className="max-w-36"
                />
            </a>
        </div>
        <div className="w-full">
          <Input />
        </div>
        <div className="w-24 text-right font-semibold text-[#2f2f2f]">Carrinho</div>
      </div>
    </header>
  );
};

export default Header;