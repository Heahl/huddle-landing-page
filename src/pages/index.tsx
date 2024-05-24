import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>HUDDLE</title>
        <meta name="description" content="huddle-landing-page" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between bg-violet">
        {/* Backgrounds */}
        <Image
          className="absolute block h-screen w-screen object-cover lg:hidden"
          src={"/images/bg-mobile.svg"}
          width={100}
          height={100}
          alt="Mobile Background"
        />
        <Image
          className="absolute hidden h-screen w-screen object-cover lg:block"
          src={"/images/bg-desktop.svg"}
          width={100}
          height={100}
          alt="Desktop Background"
        />
        {/* Page */}
        <div className="z-10 flex h-full w-full max-w-[800px] flex-col items-center justify-between px-16 lg:max-w-full lg:px-24">
          {/* Huddle Logo */}
          <div className="my-8 flex h-20 w-full items-center">
            <Image
              className="h-40 w-40 lg:h-60 lg:w-60"
              src={"/images/logo.svg"}
              width={100}
              height={100}
              alt="Huddle Logo"
            />
          </div>
          {/* Content */}
          <div className="mb-10 flex w-full flex-col gap-10 lg:my-16 lg:h-full lg:flex-row lg:justify-center">
            {/* Illustration Container */}
            <div className="w-full">
              <Image
                className="w-full"
                src={"/images/illustration-mockups.svg"}
                width={100}
                height={100}
                alt="Illustation Mockups"
              />
            </div>
            {/* Text Container */}
            <div className="flex flex-col items-center gap-8 lg:items-start lg:justify-center lg:gap-12">
              <h1 className="text-center font-poppinsMedium text-3xl capitalize text-white lg:text-start lg:text-5xl">
                Build the community your fans will love
              </h1>
              <p className="text-center font-openSans text-white lg:text-start lg:text-xl">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <button className="w-2/3 rounded-full bg-white px-8 py-4 text-violet shadow-xl shadow-purple-950/30 hover:bg-soft-magenta hover:text-white lg:max-w-[200px]">
                Register
              </button>
            </div>
          </div>
          {/* Social Icons Container */}
          <div className="mb-6 flex w-full justify-center gap-4 self-end lg:h-full">
            <div className="hidden w-2/3 lg:block" />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-4 rounded-full border-2 border-white/90 p-2 text-white hover:border-soft-magenta hover:text-soft-magenta"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-4 rounded-full border-2 border-white/90 p-2 text-white hover:border-soft-magenta hover:text-soft-magenta"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-4 rounded-full border-2 border-white/90 p-2 text-white hover:border-soft-magenta hover:text-soft-magenta"
            />
          </div>
        </div>
      </main>
    </>
  );
}
