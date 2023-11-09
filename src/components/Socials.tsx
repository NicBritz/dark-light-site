import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import Image from "next/image";

export default function Socials() {
  return (
    <ul className="flex gap-4" data-testid="socials">
      <li>
        <Link
          href="https://www.linkedin.com/in/nicbritz/"
          passHref={true}
          target="_blank"
          data-testid="linkedin"
        >
          <FaLinkedin className="text-5xl hover:opacity-80 transition-opacity text-primary" />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/NicBritz"
          passHref={true}
          target="_blank"
          data-testid="github"
        >
          <FaGithub className="text-5xl hover:opacity-80 transition-opacity text-primary" />
        </Link>
      </li>
      <li>
        <Link
          href="mailto:nico.britz@dark-light.tech"
          passHref={true}
          target="_blank"
          data-testid="mail"
        >
          <FaEnvelope className="text-5xl hover:opacity-80 transition-opacity text-primary" />
        </Link>
      </li>
    </ul>
  );
}
