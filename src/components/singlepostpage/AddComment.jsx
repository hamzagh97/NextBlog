import { useState, useEffect, useRef } from "react";
import profilImage from "../../../public/images/profil image.webp";
// import useAddComment from "../../hooks/useAddComment";
import Image from "next/image";
import api from "@/api/api";
import axios from "axios";

const AddComment = ({ postId, userId }) => {
  const [showButton, setShowButton] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [content, setContent] = useState("");
  const textAreaRef = useRef();

  useEffect(() => {
    if (content !== "") {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [content]);

  //   const { mutate: addComment, isLoading: isAddCommentLoading } =
  //     useAddComment(postId);

  const handleShowButton = () => {
    setShowButton(true);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const data = {
      userId,
      postId,
      content,
    };

    const addComment = async (data) => {
      return await axios.post(
        `http://localhost:5000/posts/${data.postId}/comments`,
        {
          userId: data.userId,
          postId: data.postId,
          content: data.content,
        }
      );
    };
    addComment(data);
    setContent("");
  };

  return (
    <>
      <h1 className="mb-10 font-poppins font-black">Top comments (11)</h1>
      <div className="flex space-x-4">
        <Image
          src={profilImage}
          alt=""
          className="h-9 w-9 rounded-full border hover:border-zinc-600"
        />

        <div className="flex w-full flex-col">
          <form onSubmit={handleAddComment}>
            <textarea
              className="w-full rounded-lg border border-gray-200 p-4"
              name=""
              id=""
              rows="3"
              placeholder="Add to the discussion"
              onFocus={handleShowButton}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              ref={textAreaRef}
            />
            {showButton && (
              <button
                type="submit"
                className="mt-3 block w-min rounded-md bg-violet-600 px-4 py-2 text-sm text-white disabled:opacity-50"
                disabled={disableButton}
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddComment;
