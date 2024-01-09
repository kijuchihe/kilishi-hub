import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-dark-nav h-[100px] text-white">
      <ul className="flex items-center ">
        <li>
          <Link href={"/"} className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href={""}>Menu</Link>
        </li>
        <li>
          <Link href={""}>About us</Link>
        </li>
        <li>
          <Link href={""}>My Account</Link>
        </li>
        <li>
          <Link href={""}>Cart(0)</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
