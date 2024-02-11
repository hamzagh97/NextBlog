// import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import englishStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
const formatter = buildFormatter(englishStrings);
import Link from "next/link";

const Post = (props: any) => {
  return (
    <Link href={`/posts/${props.id}`}>
      <div
        className="relative
        -m-px flex h-80 cursor-pointer items-center justify-center border border-gray-300 bg-white p-5 transition ease-in-out hover:z-10 hover:scale-105 hover:border-gray-700 hover:drop-shadow-2xl"
      >
        <span className="absolute left-1 top-1 font-black">
          <TimeAgo date={props.date} formatter={formatter} />
        </span>
        <h1
          className="
          font-poppins text-3xl font-black"
        >
          {props.title}
        </h1>
      </div>
    </Link>
  );
};

export default Post;
