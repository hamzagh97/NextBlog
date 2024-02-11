import { useState } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import api from "@/api/api";
import AddComment from "@/components/singlepostpage/AddComment";
import Comments from "@/components/singlepostpage/Comments";
import { useSession } from "next-auth/react";

const PostId = (props: any) => {
  const [showDeletePostModal, setShowDeletePostModal] = useState(false);
  const [showDeleteCommentModal, setShowDeleteCommentModal] = useState(false);
  const [commentId, setCommentId] = useState("");
  const params = useParams();
  const session = useSession();
  console.log(props.post.comments);

  const router = useRouter();
  const postId = router.query.PostId;
  // const path = router.asPath;
  // console.log(postId);

  // const params = useParams();
  // const { postId } = params;
  // const context = useContext(AuthContext);
  const userId = session?.data?.user?._id;

  //  const { data: post, isLoading } = useSinglePost(postId);
  //  const showActions = !isLoading ? userId === post.data.userId : null;

  //  const { mutate: deletePost, isLoading: isDeletePostLoading } =
  //    useDeletePost();

  //  const { mutate: deleteComment, isLoading: isDeleteCommentLoading } =
  //    UseDeleteComment(postId);

  const showDeletePostModalHandle = () => {
    setShowDeletePostModal(true);
  };

  const closeDeletePostModalHandle = () => {
    setShowDeletePostModal(false);
  };

  const showDeleteCommentModalHandle = () => {
    setShowDeleteCommentModal(true);
  };

  const closeDeleteCommentModalHandle = () => {
    setShowDeleteCommentModal(false);
  };

  //  const handleDeletePost = async (e) => {
  //    e.preventDefault();
  //    const data = { postId, userId };
  //    deletePost(data);
  //  };

  const handleDeleteComment = async (e) => {
    e.preventDefault();
    const data = { postId, commentId };
    deleteComment(data);
    setShowDeleteCommentModal(false);
  };

  return (
    <>
      {/* {showDeleteCommentModal && (
        <Modal
          delete={handleDeleteComment}
          close={closeDeleteCommentModalHandle}
        />
      )}
      {showDeletePostModal && (
        <Modal delete={handleDeletePost} close={closeDeletePostModalHandle} />
      )}
      {isLoading ? (
        <div>loading...</div>
      ) : ( */}
      <>
        <div className="mx-auto mb-10 mt-10 flex max-w-3xl items-center justify-between px-4">
          <div className="flex items-center space-x-5">
            <span className="cursor-pointer rounded-full border border-violet-400 p-1.5 uppercase hover:border-violet-900">
              ad
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-black capitalize text-black">
                name
              </span>
              <span className="text-sm">
                posted on
                <span className="font-black">{props.post.createdAt}</span>
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            {/* {showActions && (
                <>
                  <Link to={`/edit/${params.postId}`}>
                    <button className="rounded border border-none px-2 py-1.5 font-bold capitalize text-black hover:bg-blue-600 hover:text-white">
                      edit
                    </button>
                  </Link>
                  <button
                    className="rounded border border-none px-2 py-1.5 font-bold capitalize text-black hover:bg-red-600 hover:text-white"
                    onClick={showDeletePostModalHandle}
                  >
                    delete
                  </button>
                </>
              )} */}
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center font-poppins text-5xl font-black text-black sm:justify-start">
          {props.post.title}
        </div>

        <div className="h-100 mx-auto mt-20 max-w-3xl border border-gray-300 bg-white p-10">
          <div
            className="font-black text-black outline-none"
            dangerouslySetInnerHTML={{ __html: props.post.content }}
          ></div>
        </div>
        <div className="mx-auto my-10 max-w-3xl space-y-6 rounded-lg bg-white p-8">
          <AddComment postId={postId} userId={userId} />
          {/* <Comments
            comments={props.post.comments}
            setCommentId={setCommentId}
            showModalHandle={showDeleteCommentModalHandle}
            userId={userId}
            postId={postId}
          /> */}
        </div>
      </>
      {/* )} */}
    </>
  );
};

export default PostId;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const session = await getSession(context);

  const postId = context.params.PostId;

  const post = await api
    .get(`posts/${postId}`, {
      headers: { Authorization: `Bearer ${session?.token}` },
    })
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      post,
    },
  };
};
