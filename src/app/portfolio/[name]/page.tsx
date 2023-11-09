"use client";
import Link from "next/link";
import { data } from "../../../data/projects";
import Image from "next/image";

export default function Page({
  params,
}: {
  params: { name: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const item = data.find((item) => item.id === +params.name);

  return (
    <div className="flex justify-center">
      {item ? (
        <div className="mb-12 space-y-5 max-w-4xl flex flex-col">
          <div className="self-center">
            <Image
              src={item.img}
              width={1920}
              height={1080}
              alt={`${item.title} main image`}
              priority
            />
          </div>
          <h1 className="uppercase text-3xl font-bold">{item.title}</h1>
          <p className="opacity-70">{item.detailedDescription}</p>
          <ul className="flex gap-2">
            {item.github && (
              <li>
                <Link
                  href={item.github}
                  target="_blank"
                  passHref={true}
                  className="btn btn-primary text-white w-32 uppercase"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                  Code
                </Link>
              </li>
            )}
            {item.live && (
              <li>
                <Link
                  href={item.live}
                  target="_blank"
                  passHref={true}
                  className="btn btn-primary text-white w-32 uppercase"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  website
                </Link>
              </li>
            )}
          </ul>
          <h2 className="uppercase text-xl font-bold tracking-wider pt-3">
            Screenshots
          </h2>
          <div className="flex flex-wrap gap-8">
            {item.screenshots.map((img, ind) => (
              <div key={ind}>
                <Image
                  src={img}
                  width={1920}
                  height={1080}
                  alt={`${item.title} screenshot ${ind}`}
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-12 space-y-5 self-center justify-self-center">
          <p>Project not found</p>
          <Link
            href="/portfolio"
            className="btn btn-primary text-white uppercase"
          >
            Explore my work
          </Link>
        </div>
      )}
    </div>
  );
}
