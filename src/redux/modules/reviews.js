import shortid from "shortid";

const initialState = [
  { id: shortid.generate(), review: "댓글 테스트" },
  { id: shortid.generate(), review: "댓글 테스트2" },
  { id: shortid.generate(), review: "댓글 테스트3" },
  { id: shortid.generate(), review: "댓글 테스트4" },
];

// 리듀서
const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.payload];

    case "DELETE_REVIEW":
      return state.filter((review) => review.id !== action.payload);

    default:
      return state;
  }
};

export default reviews;
