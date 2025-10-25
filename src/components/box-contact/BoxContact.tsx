import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const BoxContact = () => {
  return (
    <nav className="fixed right-5 bottom-24">
      <ul
        style={{ boxShadow: "0px 2px 4px 0px #00000026" }}
        className="bg-travel-primary flex flex-col items-center gap-5 rounded-[10px] p-3 text-white"
      >
        <li>
          <Link href={""} target="_blank">
            <FaFacebookF className="text-lg" />
          </Link>
        </li>
        <li>
          <Link href={""} target="_blank">
            <FaInstagram className="text-lg" />
          </Link>
        </li>
        <li>
          <Link href={""} target="_blank">
            <FaTwitter className="text-lg" />
          </Link>
        </li>
        <li>
          <Link href={""} target="_blank">
            <FaYoutube className="text-lg" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
