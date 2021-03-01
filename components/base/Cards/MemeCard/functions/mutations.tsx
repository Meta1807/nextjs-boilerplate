import {
  useInsertMemesMutation,
  useDeleteMemeMutation,
  GetUserDocument,
} from "@generated/graphql"

const insertMeme = (uid, memeId) =>
  useInsertMemesMutation({
    variables: {
      meme: {
        meme_id: memeId,
        user_id: uid,
      },
    },
    refetchQueries: [
      {
        query: GetUserDocument,
        variables: {
          id: uid,
        },
      },
    ],
  })

const deleteMeme = (uid, memeId) =>
  useDeleteMemeMutation({
    variables: {
      user_id: uid,
      meme_id: memeId,
    },
    refetchQueries: [
      {
        query: GetUserDocument,
        variables: {
          id: uid,
        },
      },
    ],
  })

export { insertMeme, deleteMeme }
