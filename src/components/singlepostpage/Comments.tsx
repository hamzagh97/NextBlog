import profilImage from "../../../public/images/profil image.webp";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Image from "next/image";
import api from "@/api/api";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({
  comments,
  showModalHandle,
  setCommentId,
  userId,
  postId,
}) => {
  // console.log(comments);
  //   const userId = context.user._id;
  //   const navigate = useNavigate();
  //   const params = useParams();
  //   const postId = params.postId;
  // const session = await getSession(context);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      await axios
        .get(`http://localhost:5000/posts/${postId}/comments`)
        .then((res) => {
          setPostComments(res.data);
        });
    };

    getComments();
  }, [postId]);

  return postComments.map((comment, i) => {
    return (
      <div className="flex w-full space-x-4" key={i}>
        <Image
          src={profilImage}
          alt=""
          className="h-9 w-9 rounded-full border hover:border-zinc-600"
        />
        <div className="w-full rounded-lg border border-gray-200 p-4">
          <div className="mb-4 space-x-4">
            <span className="font-black">Ben Halpern</span>
            <span>May 4</span>
          </div>
          <div>{comment.content}</div>
          {comment.userId === userId && (
            <div className="mt-4 flex justify-end space-x-4">
              <button
                className="rounded border border-none px-2 py-1.5 font-bold capitalize text-black hover:bg-blue-600 hover:text-white"
                // onClick={() => {
                //   navigate(`/${postId}/comments/edit/${comment._id}`);
                // }}
              >
                edit
              </button>
              <button
                className="rounded border border-none px-2 py-1.5 font-bold capitalize text-black hover:bg-red-600 hover:text-white"
                onClick={() => {
                  showModalHandle();
                  setCommentId(comment._id);
                }}
              >
                delete
              </button>
            </div>
          )}
        </div>
      </div>
    );
  });
};

export default Comments;
