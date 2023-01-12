export function filterByKeyword(search, articles) {
  const filteredArray = []

  for (const article of articles) {
    if (article.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
      filteredArray.push({ ...article, priority: 1 })
    } else if (
      article.summary.toLowerCase().indexOf(search.toLowerCase()) !== -1
    ) {
      filteredArray.push({ ...article, priority: 2 })
    }
  }

  // console.log("filteredArray", filteredArray)
  return filteredArray
}

// const filterTitleArticles = articles.filter((article) =>
//   article.title.toLowerCase().includes(search.toLowerCase())
// )
// console.log("filterTitleArticle", filterTitleArticles)

// const filterSummaryArticles = articles.filter((article) =>
//   article.summary.toLowerCase().includes(search.toLowerCase())
// )
// console.log("filterSummaryArticles", filterSummaryArticles)
