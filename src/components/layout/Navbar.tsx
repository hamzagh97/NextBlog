import { BsSearch } from "react-icons/bs";
// import profilImage from "../../../assets/images/profil image.webp";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const session = useSession();
  const authenticated = session.status === "authenticated";

  return (
    <div
      className="
    sticky left-0 right-0 top-0 z-10 bg-white drop-shadow-md"
    >
      <div
        className="
        mx-auto flex max-w-7xl justify-between px-4 py-2"
      >
        <div
          className="
          flex items-center justify-between space-x-5"
        >
          <Link href="/">
            <span className="cursor-pointer rounded bg-black p-1 font-poppins text-lg font-black uppercase text-white">
              blog
            </span>
          </Link>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="search..."
              className="
              relative hidden w-80 rounded border border-gray-300 p-1.5 indent-1 placeholder:capitalize placeholder:text-gray-800  sm:block"
            />
            <span className=" absolute right-0 hidden cursor-pointer rounded p-2 hover:bg-slate-200 sm:block">
              <BsSearch size={20} />
            </span>
          </div>
        </div>
        <div
          className="
          ml-auto flex items-center gap-x-5"
        >
          {/* MOBILE SEARCH ICON */}
          <span className="block cursor-pointer rounded p-2 sm:hidden">
            <BsSearch size={20} />
          </span>
          {/* END MOBILE SEARCH ICON */}
          {authenticated && (
            <Link href="/new">
              <button
                className="
          hidden rounded border border-violet-900 bg-white px-2 py-1.5 font-bold capitalize text-violet-900 outline-none hover:bg-violet-600 hover:text-white md:block"
              >
                create post
              </button>
            </Link>
          )}
          {/* MOBILE CREATE POST BUTTON */}
          {authenticated && (
            // <Link to={"create"}>
            <button className="block items-center justify-center rounded border border-violet-900 bg-white px-3 text-3xl font-black capitalize text-violet-900 outline-none hover:bg-violet-600 hover:text-white md:hidden">
              +
            </button>
            // </Link>
          )}
          {/* END MOBILE CREATE POST BUTTON */}
          {authenticated ? (
            <span
              className="cursor-pointer p-1.5 hover:bg-gray-100"
              onClick={() => {
                signOut({ callbackUrl: `/login` });
              }}
            >
              Log out
            </span>
          ) : router.pathname === "/login" ? (
            // <Link to="register">
            <span className="cursor-pointer p-1.5 hover:bg-gray-100">
              Sign up
            </span>
          ) : (
            // </Link>
            router.pathname === "/register" && (
              //   <Link to="login">
              <span className="cursor-pointer p-1.5 hover:bg-gray-100">
                Sign in
              </span>
              //    </Link>
            )
          )}
          {authenticated && (
            // <Link to={"profil/:profilId"}>
            <img
              // src={profilImage}
              alt=""
              className="h-9 w-9 rounded-full border hover:border-zinc-600"
            />
            // </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
