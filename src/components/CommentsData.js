import { generateRandomName } from "../utils/helper";

const CommentsData = [
  {
    name: generateRandomName(),
    comment: "This is a Comment",
    replies: [
      {
        name: generateRandomName(),
        comment: "This is N-level Nested Comment",
        replies: [
          {
            name: generateRandomName(),
            comment: "This is N-level Nested Comment",
            replies: [
              {
                name: generateRandomName(),
                comment: "This is N-level Nested Comment",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: generateRandomName(),
    comment: "This is a Comment",
    replies: [],
  },
  {
    name: generateRandomName(),
    comment: "This is a Comment",
    replies: [
      {
        name: generateRandomName(),
        comment: "This is N-level Nested Comment",
        replies: [
          {
            name: generateRandomName(),
            comment: "This is N-level Nested Comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: generateRandomName(),
    comment: "This is a Comment",
    replies: [
      {
        name: generateRandomName(),
        comment: "This is N-level Nested Comment",
        replies: [],
      },
    ],
  },
];
export default CommentsData;
