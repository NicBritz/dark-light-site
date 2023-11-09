import Image from "next/image";
import Link from "next/link";
import { data } from "../../data/projects";
import { Heading } from "@/components/Typography/Heading";
export default function Portfolio() {
  return (
    <div>
      <Heading
        title="portfolio"
        subtitle="some source code is available upon request"
      />
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {data.map((item) => (
          <Link
            href={`/portfolio/${item.id}`}
            key={item.id}
            className="max-w-xl group h-[450px]"
          >
            <div className="card card-compact max-w-[384px] w-full bg-base-50 shadow-xl relative h-full">
              <div className="w-full h-full bg-primary absolute group-hover:opacity-90 opacity-0 flex justify-center items-center flex-col gap-4 top-0 transition-all duration-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-4xl text-white font-bold uppercase">view</p>
              </div>
              <figure className="h-[250px] bg-primary">
                <Image
                  src={item.img}
                  priority
                  alt={`${item.title} image`}
                  width={320}
                  height={320}
                  className="h-full w-full object-fit"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.shortDescription}</p>
                <div className="card-actions mt-5">
                  {item.tech.map((tech, ind) => (
                    <div key={ind} className="badge badge-neutral">
                      {tech}
                    </div>
                  ))}
                  <button className="btn btn-primary w-full mt-4 sm:hidden inline-block">
                    View
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
