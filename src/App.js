import React, { useState, useEffect } from "react"

import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { fetchAllArticles, fetchArticlesByQuery } from "./components/utils/api"
import { filterByKeyword } from "./components/utils/filterBykeywords"

function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState("")

  // const [startQequest, setStartQequest] = useState(1)

  // !зробити скидання пошуку

  useEffect(() => {
    async function getAllArticles() {
      const allArticles = await fetchAllArticles()

      setArticles(allArticles)
    }

    getAllArticles()

    return () => {}
  }, [])

  useEffect(() => {
    if (search === "") {
      return
    }

    const filtredArticles = filterByKeyword(search, articles)
    // !sort
    // console.log("filtredArticles", filtredArticles)
    // const sortArticles = filtredArticles.sort((a, b) => a.priority - b.priority)

    setArticles(filtredArticles)

    return () => {}
  }, [search])

  function trackingSearchQuery(evt) {
    setSearch("")
    console.log("search", search)
    evt.preventDefault()

    const form = evt.currentTarget
    const searchValue = form.elements.search.value

    if (searchValue === "") {
      return console.log("Empty search value")
    }

    setSearch(searchValue)

    form.reset()
  }

  return (
    <div className="Container">
      <Filter onSubmit={trackingSearchQuery} />
      <Cards articles={articles} search={search} />
    </div>
  )
}

export default App
