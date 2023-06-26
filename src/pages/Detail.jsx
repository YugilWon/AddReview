import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const reviews = useSelector((state) => state.reviews);

  const todo = todos.filter((todo) => todo.id === id)[0];
  const review = reviews.filter((review) => review.id === todo.id)[0];
  console.log(review);
  console.log(todos);

  const dispatch = useDispatch();

  const [addreview, SetReview] = useState();

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
      <br />
      <br />
      <div className="Review">
        <form
          onSubmit={(e) => {
            if (!addreview === "") {
              alert("필수값이 누락되었습니다. 확인해주세요.");
              return false;
            }

            e.preventDefault();

            dispatch({
              type: "ADD_REVIEW",
              payload: {
                reviewid: shortid.generate(),
                id: todo.id,
                addreview,
              },
            });

            SetReview("");
          }}
        >
          <div>
            <label>댓글내용 : </label>
            <input
              type="text"
              name="review"
              value={addreview}
              onChange={(e) => {
                SetReview(e.target.value);
              }}
            />
          </div>
          <button>추가하기</button>
          <br />
          댓글 ID : {review.reviewid}
          <br />
          댓글 내용 : {review.addreview}
          <br />
          <button>삭제하기</button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Detail;
