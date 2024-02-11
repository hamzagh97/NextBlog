// import { useState, useContext } from "react";
import { useState } from "react";

// import AuthContext from "../context/Auth-Context";
import api from "@/api/api";
// import useAddPost from "../hooks/useAddPost";
import Editor from "@/components/layout/editor/Editor";

const New = () => {
  //   const context = useContext(AuthContext);
  //   const userId = context.user._id;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const [loading, setLoading] = useState(true);

  //   const { mutate: addPost, isLoading: isAddPostLoading } = useAddPost();

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeText = (content: any) => {
    setContent(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = { content, title, userId };
    // if (title !== "" && content !== "") {
    //   addPost(data);
    // }
  };

  return (
    <>
      <div className="px-4">
        <p className="mx-auto mt-10 flex max-w-3xl justify-center font-poppins font-black capitalize text-black md:justify-start">
          create post
        </p>

        <div
          className="
        mx-auto mb-10 mt-5 h-full max-w-3xl rounded-xl border border-gray-300 bg-white"
        >
          <form onSubmit={handleSubmit}>
            <div className="px-14 py-14">
              <input
                name="title"
                type="text"
                placeholder="New post title here..."
                className="w-full font-poppins text-4xl font-black outline-none placeholder:text-black"
                onChange={handleOnChangeTitle}
              />
            </div>
            <Editor handleOnChangeText={handleOnChangeText} height={500} />
            <div className="flex justify-center px-14 py-5 md:justify-start">
              <button
                type="submit"
                className="
            rounded border border-violet-900 bg-violet-600 px-5 py-3 font-black capitalize text-white outline-none hover:bg-violet-900"
              >
                {/* {isAddPostLoading ? "loading..." : "publish"} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default New;
