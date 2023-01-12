import React, { useState, useEffect } from "react"
import Container from "@mui/material/Container"

import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { fetchAllArticles, fetchArticlesByQuery } from "./components/api"

function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState("")

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

    async function aaaaa() {
      const serch = await fetchArticlesByQuery(search)
      console.log("serch", serch)
    }

    aaaaa()

    return () => {}
  }, [search])

  function trackingSearchQuery(evt) {
    evt.preventDefault()

    const form = evt.currentTarget
    const searchValue = form.elements.search.value
    console.log("searchValue", searchValue)

    if (searchValue === "") {
      return console.log("Empty search value")
    }

    setSearch(searchValue)

    form.reset()
  }

  return (
    <Container maxWidth="1440px" sx={{ padding: "50px 75px" }}>
      <Filter onSubmit={trackingSearchQuery} />
      <Cards articles={articles} />
    </Container>
  )
}

export default App
