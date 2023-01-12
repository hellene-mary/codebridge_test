import axios from "axios"

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/articles"

export async function fetchAllArticles() {
  try {
    const res = await axios.get("", { params: { _limit: 50 } })
    return res.data
  } catch (error) {
    console.error("Some error", error)
  }
}

export async function fetchArticlesById(articleId) {
  try {
    const res = await axios.get("", {
      id: articleId,
    })

    return res.data
  } catch (error) {
    console.error("Some error", error)
  }
}
