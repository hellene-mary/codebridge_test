import axios from "axios"

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/articles"

export async function fetchAllArticles() {
  try {
    const res = await axios.get("")
    return res.data
  } catch (error) {
    console.error("Some error", error)
  }
}

export async function fetchArticlesByQuery(search) {
  try {
    const res = await axios.get("", {
      params: { _in: ["Russia", "will", "abandon"] },
    })

    return res.data
  } catch (error) {
    console.error("Some error", error)
  }
}
