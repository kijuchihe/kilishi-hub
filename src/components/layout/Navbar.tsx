import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-dark-400 h-[100px] text-white flex items-center justify-center opacity-90">
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
    </nav>
  );
};

export default Navbar;
