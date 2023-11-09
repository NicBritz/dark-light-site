import Link from "next/link";
import Socials from "./Socials";
import { UiText } from "./Typography/UiText";
import { UiHeading } from "./Typography/UiHeading";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="max-w-xl space-y-6">
          <UiHeading>
            Hello there, <br></br>I&apos;m Nico
          </UiHeading>
          <UiText>
            For as long as I can remember, it was my dream to be a software
            developer. I spent years studding (and still do) while maintaining a
            full-time job among my other responsibilities.
          </UiText>
          <UiText>
            Nowadays, I am proud to be a Full-stack developer, creating web
            apps, websites and even games (sometimes just for fun :)
          </UiText>
          <Socials />
          <Link
            href="/portfolio"
            className="btn btn-primary text-white uppercase"
          >
            Explore my work
          </Link>
        </div>
      </div>
    </div>
  );
}
