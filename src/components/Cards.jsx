import CardMedia from "@mui/material/CardMedia"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
// import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Link } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"

const Cards = ({ articles }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        gap: "45px",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
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
          <CardContent sx={{ padding: "25px" }}>
            <p>{article.updatedAt}</p>
            <h1>{article.title}</h1>
            <p>{article.summary}</p>
            <CardActions>
              <Link href={article.url} color="inherit">
                Read more
                <ArrowForwardRoundedIcon />
              </Link>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}

export default Cards
