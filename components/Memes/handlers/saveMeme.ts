import { InsertMemesMutationFn } from "../../../generated/graphql"

const saveMeme = (insertMemes: InsertMemesMutationFn, id) => {
  return insertMemes({
    variables: {
      meme: {
        meme_id: id,
        user_id: "343d5987-306a-4815-8dcb-fa2fd0ff523b",
      },
    },
  })
}

export default saveMeme
