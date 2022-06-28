import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardCommunity from "../Components/CardCommunity";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Dropdown from "react-bootstrap/Dropdown";
import "../style/Communtiy.css";
export default function Community({ current }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let author = data.get("author");
    let title = data.get("title");
    let image = data.get("image");
    let like = data.get("like");
    let Comment = data.get("Comment");
    let payload = {
      author: author,
      title: title,
      image: image,
      like: like,
      Comment: Comment,
    };
    console.log(payload);
    addDoc(collection(db, "recipes"), payload);
  };
  const theme = createTheme();
  // const Name = current.name;

  return (
    <Dropdown className="ffa">
      <Dropdown.Toggle className="btn1" variant="success" id="dropdown-basic">
        Create Post{" "}
      </Dropdown.Toggle>
      <Dropdown.Menu className="ffa">
        <ThemeProvider theme={theme} className="ffa">
          <CssBaseline />
          {/* App Bar */}
          <AppBar position="relative" className="ffa"></AppBar>
          <main>
            {/* Header unit */}
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 2,
                pb: 2,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                ></Typography>

                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="image"
                    name="image"
                    label="Image URL"
                    type="url"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Comment"
                    name="Comment"
                    label="description"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="author"
                    name="author"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Add New Item
                  </Button>
                </Box>
              </Container>
            </Box>
            {/* Image List Container */}
            <Container sx={{ py: 8 }} align="center"></Container>
          </main>
        </ThemeProvider>
      </Dropdown.Menu>
      <div className="dda">
        <CardCommunity />
      </div>
    </Dropdown>
  );
}

//////////////////////////////////////////////

//   /* <div className="App">
//       <input
//         placeholder="Name..."
//         onChange={(event) => {
//           setNewName(event.target.value);
//         }}
//       />
//       <input
//         placeholder="POST"
//         onChange={(event) => {
//           setNewPost(event.target.value);
//         }}
//       />
//       {/* <input
//         type="file"
//         onChange={(event) => {
//           setImagupload(event.target.files[0]);
//         }}
//       />
//       <button onClick={uploadImage}>Upload</button> */}
//       <button onClick={createCommentUser}> Create منشور</button>
//       {users.map((user) => {
//         return (
//           <div>
//             {" "}
//             <h1>Name: {user.name}</h1>
//             <h1>Post: {user.post}</h1>
//             <h1>like: {user.age}</h1>
//             <h3>Comment: {user.Comment}</h3>
//             <button
//               onClick={() => {
//                 updateUser(user.id, user.age);
//               }}
//             >
//               {" "}
//               like
//             </button>
//             <button
//               onClick={() => {
//                 deleteUser(user.id);
//               }}
//             >
//               {" "}
//               Delete post
//             </button>
//             <input
//               placeholder="Comment"
//               onChange={(event) => {
//                 setNewComment(event.target.value);
//               }}
//             />
//             <button onClick={createComment}>send</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
//////////////////////////////

//   <Form>
// <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//   <Form.Label>Email address</Form.Label>
//   <Form.Control
//     type="email"
//     placeholder="Name..."
//     onChange={(event) => {
//       setNewName(event.target.value);
//     }}
//   />
// </Form.Group>
// <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//   <Form.Label>Example textarea</Form.Label>
//   <Form.Control
//     placeholder="POST"
//     onChange={(event) => {
//       setNewPost(event.target.value);
//     }}
//     rows={3}
//   />
// </Form.Group>
// <Button className="btn1" variant="Dark" onClick={createUser}>
//   Create منشور
// </Button>
// </Form>
// {users.map((user) => {
// return (
//   <Card style={{ width: "18rem" }}>
//     <Card.Body>
//       <Card.Title>{user.name}</Card.Title>
//       <Card.Text>{user.post}</Card.Text>
//       <Card.Link>{user.age}</Card.Link>
//       <Card.Subtitle className="mb-2 text-muted">
//         {user.Comment}
//       </Card.Subtitle>
//     </Card.Body>
//     <Button
//       className="btn1"
//       variant="Dark"
//       onClick={() => {
//         updateUser(user.id, user.age);
//       }}
//     >
//       like
//     </Button>

//     <Button
//       className="btn1"
//       variant="Dark"
//       onClick={() => {
//         deleteUser(user.id);
//       }}
//     >
//       {" "}
//       Delete post
//     </Button>
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Label>Components</Form.Label>
//       <Form.Control
//         type="email"
//         placeholder="Comment"
//         onChange={(event) => {
//           setNewComment(event.target.value);
//         }}
//       />
//     </Form.Group>
//     <Button className="btn1" variant="Dark" onClick={createComment}>
//       send
//     </Button>
//   </Card>
// );
// })}
/////////////////////
// import { useState, useEffect } from "react";
// import { db } from "../firebase/firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import {
//   Button,
//   ButtonGroup,
//   Form,
//   Row,
//   Col,
//   yup,
//   InputGroup,
//   Card,
// } from "react-bootstrap";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import "../style/Communtiy.css";
// import { storage } from "../firebase/firebase";
// import { v4 } from "uuid";
// import { ref, uploadBytes } from "firebase/storage";
// export default function Communtiy() {
//   const [newPost, setNewPost] = useState("");
//   const [newComment, setNewComment] = useState("");
//   const [visible, setVisible] = useState(false);

//   // const { imagupload, setImagupload } = useState("null");

//   // const uploadImage = () => {
//   //   if (imagupload == null) return;
//   //   const imageRef = ref(storage, `images/${imagupload.name + v4()}`);

//   //   uploadBytes(imageRef, imagupload).then(() => {
//   //     alert("image uploaded");
//   //   });
//   // };

//   const [newName, setNewName] = useState("");
//   const [newAge, setNewAge] = useState(0);

//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "users");

//   const createUser = async () => {
//     await addDoc(usersCollectionRef, {
//       post: newPost,
//       name: newName,
//       Comment: newComment,
//       age: Number(newAge),
//     });
//   };

//   const updateUser = async (id, age) => {
//     const userDoc = doc(db, "users", id);
//     const newFields = { age: age + 1 };
//     await updateDoc(userDoc, newFields);
//   };

//   ///////////////////////////
//   const updateComment = async (Comment) => {
//     const userComment = doc(db, "users", Comment);
//     await updateComment(userComment);
//   };

//   const createComment = async () => {
//     await addDoc(usersCollectionRef, {
//       Comment: newComment,
//     });
//   };
//   //////////////////////////
//   const deleteUser = async (id) => {
//     const userDoc = doc(db, "users", id);
//     await deleteDoc(userDoc);
//   };

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getUsers();
//   }, []);

//   function createCommentUser() {
//     createUser();
//     // imagupload();
//   }

//   return (
//     <div className="App">
//       <Form>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>name</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Name..."
//             onChange={(event) => {
//               setNewName(event.target.value);
//             }}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//           <Form.Label>post</Form.Label>
//           <Form.Control
//             placeholder="POST"
//             onChange={(event) => {
//               setNewPost(event.target.value);
//             }}
//             rows={3}
//           />
//         </Form.Group>
//         <Button className="btn1" variant="Dark" onClick={createUser}>
//           Create Post
//         </Button>
//       </Form>
//       {users.map((user) => {
//         return (
//           <Card className="post">
//             <ButtonGroup className="ttt">
//               <DropdownButton
//                 as={ButtonGroup}
//                 title="..."
//                 id="bg-nested-dropdown"
//                 className="ttt"
//               >
//                 <Dropdown.Item
//                   eventKey="1"
//                   onClick={() => {
//                     deleteUser(user.id);
//                   }}
//                 >
//                   Delete
//                 </Dropdown.Item>
//                 <Dropdown.Item eventKey="2"></Dropdown.Item>
//               </DropdownButton>
//             </ButtonGroup>

//             <Card.Body>
//               <Card.Title className="nnn">{user.name}</Card.Title>
//               <Card.Text>{user.post}</Card.Text>
//               <Card.Link className="lll"> like:{user.age}</Card.Link>
//               <Card.Subtitle className="mb-2 text-muted">
//                 {user.Comment}
//               </Card.Subtitle>
//               <img
//                 onClick={() => {
//                   updateUser(user.id, user.age);
//                 }}
//                 src="https://cdn-icons-png.flaticon.com/512/633/633759.png"
//                 className="like"
//               />
//             </Card.Body>

//             {/* <Button
//               className="btn1"
//               variant="Dark"
//               onClick={() => {
//                 deleteUser(user.id);
//               }}
//             >
//               {" "}
//               Delete post
//             </Button> */}
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label></Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Comment"
//                 onChange={(event) => {
//                   setNewComment(event.target.value);
//                 }}
//               />
//             </Form.Group>
//             <Button className="btn1" variant="Dark" onClick={createComment}>
//               send
//             </Button>
//           </Card>
//         );
//       })}
//     </div>
//   );
// }
