import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { db } from "../firebase/firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import Dropdown from "react-bootstrap/Dropdown";
import "../style/Communtiy.css";
import { styled } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function TitlebarImageList() {
  const [recipes, setRecipes] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "recipes"), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  console.log(recipes);

  const theme = createTheme();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const deleteRecipe = async (id) => {
    await deleteDoc(doc(db, "recipes", id));
  };

  const like = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  // const fff = recipes.author[0];
  return (
    <div className="dada">
      {recipes.map((recipe) => (
        <Card sx={{ width: 650, display:'block', minHeight:400}} theme={theme} className="dada">
          <>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  d{" "}
                </Avatar>
              }
              action={
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  sx={{
                    height: 60,
                    flexGrow: 1,
                    maxWidth: 700,
                  }}
                >
                  <TreeItem nodeId="1" label="">
                    <TreeItem
                      nodeId="2"
                      label="delete"
                      onClick={() => {
                        deleteRecipe(recipe.id);
                      }}
                      sx={{
                        fontSize: 5,
                      }}
                    />
                  </TreeItem>
                </TreeView>
              }
              title={recipe.author}
              subheader={date}
            />
            <CardMedia
              component="img"
              height="250"
              width="360"
              src={`${recipe.image}`}
              srcSet={`${recipe.image}`}
              alt={recipe.title}
              loading="lazy"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" className="title1" >
                {" "}
                {recipe.title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing className="ssd">
              <IconButton
                aria-label="add to favorites"
                name="like"
                id="like"
                style={{
                  backgroundColor: isActive ? "salmon" : "",
                  color: isActive ? "white" : "",
                }}
                onClick={like}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share"></IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography name="Comment" id="Comment">
                  {recipe.Comment}
                </Typography>
              </CardContent>
            </Collapse>
          </>
        </Card>
      ))}
    </div>
  );
}

/////////////////////////////////////////
// /<ImageList>
// {recipes.map((recipe) => (
//   <ImageListItem key={recipe.image}>
//     <img
//       src={`${recipe.image}`}
//       srcSet={`${recipe.image}`}
//       alt={recipe.title}
//       loading="lazy"
//       className="ssa"
//     />
//     <ImageListItemBar
//       title={recipe.title}
//       subtitle={recipe.author}
//       actionIcon={
//         <IconButton
//           sx={{ color: "rgba(255, 255, 255, 0.54)" }}
//           aria-label={`info about ${recipe.title}`}
//         ></IconButton>
//       }
//     />
//   </ImageListItem>
// ))}
// </ImageList>
// );
// }
/////////////////////////////
{
  /* <div className="dada">
<Card sx={{ maxWidth: 345 }} theme={theme} className="dada">
  {recipes.map((recipe) => (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.author}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        src={`${recipe.image}`}
        srcSet={`${recipe.image}`}
        alt={recipe.title}
        loading="lazy"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {" "}
          {recipe.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="ssd">
        <IconButton aria-label="add to favorites" name="like" id="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add
            saffron and set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep
            skillet over medium-high heat. Add chicken, shrimp and
            chorizo, and cook, stirring
          </Typography>
        </CardContent>
      </Collapse>
    </>
  ))}
</Card>
</div>
);
} */
}
/////////////////////////////
{
  /* <Card className="post">
{recipes.map((recipe) => (
  <>
    <Card.Img
      variant="top"
      src={`${recipe.image}`}
      srcSet={`${recipe.image}`}
      alt={recipe.title}
      loading="lazy"
    />
    <Card.Body>
      <Card.Title>{recipe.author}</Card.Title>
      <Card.Text>{recipe.title}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </>
))}
</Card>
);
} */
}
