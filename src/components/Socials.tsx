import Link from "next/link";
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
          <Image
            className="hover:opacity-80 transition-opacity"
            src="/linkedin.webp"
            width={42}
            height={42}
            alt="linkedin icon"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/NicBritz"
          passHref={true}
          target="_blank"
          data-testid="github"
        >
          <Image
            className="hover:opacity-80 transition-opacity"
            src="/github.webp"
            width={42}
            height={42}
            alt="github icon"
          />
        </Link>
      </li>
      <li>
        <Link
          href="mailto:nico.britz@dark-light.tech"
          passHref={true}
          target="_blank"
          data-testid="mail"
        >
          <Image
            className="hover:opacity-80 transition-opacity"
            src="/mail.webp"
            width={42}
            height={42}
            alt="mail icon"
          />
        </Link>
      </li>
    </ul>
  );
}
