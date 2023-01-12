import CardMedia from "@mui/material/CardMedia"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import DateRangeIcon from "@mui/icons-material/DateRange"
import Stack from "@mui/material/Stack"
import { Link } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { dateFormater } from "./utils/dateFormatter"

const Cards = ({ articles }) => {
  return (
    <>
      <p className="TextBold Border">Results: {articles.length}</p>
      <Stack
        sx={{
          display: "flex",
          gap: "45px",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "45px",
        }}
      >
        {articles.map((article) => (
          <Card sx={{ width: "400px" }} key={article.id}>
            <CardMedia
              component="img"
              alt="ImageArticle"
              height="217"
              image={article.imageUrl}
            />
            <CardContent className="CardContent" sx={{ padding: "25px" }}>
              <div>
                <p className="DataArticle">
                  <DateRangeIcon />
                  {dateFormater(article.publishedAt)}
                </p>
                <h1 className="TitleArticle">{article.title}</h1>
              </div>
              <div>
                <p className="SummaryArticle">
                  {article.summary.slice(0, 100)}...
                </p>
                <CardActions>
                  <Link
                    className="LinkArticle"
                    sx={{ textDecoration: "none" }}
                    href={article.url}
                    color="inherit"
                  >
                    Read more
                    <ArrowForwardRoundedIcon />
                  </Link>
                </CardActions>
              </div>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  )
}

export default Cards
