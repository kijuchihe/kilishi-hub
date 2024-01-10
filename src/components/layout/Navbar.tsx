import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-dark-nav h-[100px] text-white flex items-center justify-center">
      <ul className="flex items-center gap-x-5 ">
        <li>
          <Link href={"/"} className="text-reddish">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link href={"/about"}>About us</Link>
        </li>
        <li>
          <Link href={"/account"}>My Account</Link>
        </li>
        <li>
          <Link href={"/cart"}>Cart(0)</Link>
        </li>
      </ul>
      <br />
      <br />
      shop now
      <br />
      Featured Products
      <br />
      products
      <br />
      View all reddish
      <br />
      <br />
      GRID
      <br />
      sect1
      <br />
      About
      <br />
      h1
    </nav>
  );
};

export default Navbar;
