function checkArrFilter(filteredArray) {
  console.log("filteredArray in check", filteredArray)

  for (const i of filteredArray) {
    console.log("i", i.id)
  }
}

export function filterByKeyword(search, articles) {
  const arrSearch = search.split(" ")

  const filteredArray = []

  for (const article of articles) {
    for (const search of arrSearch) {
      if (article.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        filteredArray.push({ ...article, priority: 1 })
      } else if (
        article.summary.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ) {
        filteredArray.push({ ...article, priority: 2 })
      }
    }
  }

  checkArrFilter(filteredArray)

  // console.log("filteredArray in filter", filteredArray)

  return filteredArray
}

// for (const article of articles) {
//   if (article.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
//     filteredArray.push({ ...article, priority: 1 })
//   } else if (
//     article.summary.toLowerCase().indexOf(search.toLowerCase()) !== -1
//   ) {
//     filteredArray.push({ ...article, priority: 2 })
//   }
// }
