import React from "react";
import CommentsData from "./CommentsData";

const CommentInfo = ({ data }) => {
  const { name, comment } = data;

  return (
    <>
      <div className="flex mb-2 bg-gray-100 p-2 rounded">
        <img
          className="h-8 mr-3"
          alt="avatar"
          src="https://imgs.search.brave.com/Y61c9jRwIkLPF29tFBF212oqdWjSIY6LqfYjMTLjgOI/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24tYncv/Z2VuZXJpYy1hdmF0/YXItaWNvbi0zLnBu/Zw"
        ></img>

        <div>
          <h3 className="text-bold">{name}</h3>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};

const CommentList=({ comment }) => {
    return (
      <>
        {comment.map((comments) => (
          <div>
            <CommentInfo data={comments} />
            <div className="ml-5 border border-l-black">
              <CommentList comment={comments.replies} />
            </div>
          </div>
        ))}
      </>
    );
}

const Comments = () => {
  return (
    <>
      <div className="font-bold text-xl py-5">Comments:</div>
        <CommentList comment={CommentsData} />   
    </>
  );
};

export default Comments;
