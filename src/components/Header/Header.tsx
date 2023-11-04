const Header = () => {
  return (
    <div className="py-4 flex justify-between">
      <div className="text-2xl font-semibold text-neutral-700">
        Rick & Morty
      </div>
      <div>
        <a href="/" className="text-neutral-500 text-lg">
          Characters
        </a>
      </div>
    </div>
  );
};

export default Header;
