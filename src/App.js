import React, { useState, useEffect } from "react"
import Container from "@mui/material/Container"

import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { fetchAllArticles, fetchArticlesByQuery } from "./components/utils/api"
import { filterByKeyword } from "./components/utils/filterBykeywords"

function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState("")

  // !зробити скидання пошуку

  useEffect(() => {
    async function getAllArticles() {
      const allArticles = await fetchAllArticles()
      // console.log("allArticles", allArticles)

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
    evt.preventDefault()

    const form = evt.currentTarget
    const searchValue = form.elements.search.value
    // console.log("searchValue", searchValue)

    if (searchValue === "") {
      return console.log("Empty search value")
    }

    setSearch(searchValue)

    form.reset()
  }

  return (
    <div className="Container">
      <Filter onSubmit={trackingSearchQuery} />
      <Cards articles={articles} />
    </div>
  )
}

export default App
