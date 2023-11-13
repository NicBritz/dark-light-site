"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { contactFormSchema } from "../validations/contactFrom";
import { useState } from "react";
import Socials from "@/components/Socials";
import { Heading } from "@/components/Typography/Heading";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [isApiError, setIsApiError] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const safeData = {
      ...data,
      ...{
        _template: "table",
        _captcha: "true",
        _honey: "",
        _subject: "New site submission!",
      },
    };

    const res = await fetch(
      "https://formsubmit.co/ajax/nico.britz@dark-light.tech",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(safeData),
      }
    );

    console.log(JSON.stringify(safeData));

    if (!res.ok) {
      setIsApiError(true);
    }
  };

  return (
    <div>
      {isApiError && (
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Something went wrong, please try again later.</span>
        </div>
      )}
      {isSubmitSuccessful && (
        <div className="alert alert-success my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your message has been sent, we will be in touch :)</span>
        </div>
      )}
      <Heading
        title="contact me"
        subtitle="Do you have a project or question?"
      />
      <div className="max-w-xl mx-auto">
        <form
          className="flex flex-col gap-4 w-full p-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="label" htmlFor="name">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full"
            />
            {errors.name && (
              <span className="label-text-alt text-error">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label className="label" htmlFor="email">
              <span className="label-text">What is your email?</span>
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              type="email"
              placeholder="Type here"
              className="input input-bordered input-accent w-full"
            />
            {errors.email && (
              <span className="label-text-alt text-error">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label className="label" htmlFor="subject">
              <span className="label-text">How can I help?</span>
            </label>
            <input
              {...register("subject", { required: true })}
              id="subject"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full"
            />
            {errors.subject && (
              <span className="label-text-alt text-error">
                {errors.subject.message}
              </span>
            )}
          </div>
          <div>
            <label className="label" htmlFor="subject">
              <span className="label-text">Please, Tell me more?</span>
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              name="message"
              placeholder="Type here"
              className="textarea textarea-bordered textarea-accent w-full"
            />
            {errors.message && (
              <span className="label-text-alt text-error">
                {errors.message.message}
              </span>
            )}
          </div>
          <button type="submit" className="btn btn-primary hover:opacity-80">
            {isSubmitting ? (
              <span className="loading loading-dots"></span>
            ) : (
              "Send"
            )}
          </button>
        </form>
        <div className="divider py-6">OR</div>
        <div className="flex justify-center">
          <Socials />
        </div>
      </div>
    </div>
  );
}
