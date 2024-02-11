import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="
    my-10 w-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 p-10"
    >
      <p
        className="
      text-lg font-bold text-white"
      >
        Good to see you{" "}
        <span className="font-black text-violet-300">admin</span> 👋
      </p>
      <blockquote className="mt-5">
        <p className="text-lg font-bold text-white">
          "By failing to prepare, you are preparing to fail."
        </p>
        <p className="mt-5 font-bold italic text-white">- Benjamin Franklin</p>
      </blockquote>
      <div className="mt-5 flex space-x-5">
        {/* <Link to={"create"}>
          <button
            className="
          rounded border border-violet-300 bg-transparent px-3 py-1.5 font-bold capitalize text-white outline-none hover:border-violet-900 hover:bg-violet-900 hover:text-white"
          >
            create post
          </button>
        </Link>
        <Link to={"profil/:profilId"}>
          <button
            className="
          group rounded border border-violet-300 bg-transparent px-3 py-1.5 font-bold capitalize text-white outline-none hover:border-violet-900 hover:bg-violet-900 hover:text-white"
          >
            profil
            <span className="translate-x-8 group-hover:transform ">
              {" "}
              --&gt;
            </span>
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Banner;
