import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  Button,
  ButtonGroup,
  Form,
  Row,
  Col,
  yup,
  InputGroup,
  Card,
} from "react-bootstrap";
import "../style/Communtiy.css";

export default function Communtiy() {
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState("");

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      post: newPost,
      name: newName,
      Comment: newComment,
      age: Number(newAge),
    });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  ///////////////////////////
  const updateComment = async (Comment) => {
    const userComment = doc(db, "users", Comment);
    await updateComment(userComment);
  };

  const createComment = async () => {
    await addDoc(usersCollectionRef, {
      Comment: newComment,
    });
  };
  //////////////////////////
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  ///////////////////////

  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        placeholder="POST"
        onChange={(event) => {
          setNewPost(event.target.value);
        }}
      />

      <button onClick={createUser}> Create منشور</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Post: {user.post}</h1>
            <h1>like: {user.age}</h1>
            <h3>Comment: {user.Comment}</h3>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              like
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete post
            </button>
            <input
              placeholder="Comment"
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
            />
            <button onClick={createComment}>send</button>
          </div>
        );
      })}
    </div>
  );
}
//////////////////////////////////////////////
{
  /* <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        placeholder="POST"
        onChange={(event) => {
          setNewPost(event.target.value);
        }}
      />

      <button onClick={createUser}> Create منشور</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Post: {user.post}</h1>
            <h1>like: {user.age}</h1>
            <h3>Comment: {user.Comment}</h3>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              like
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete post
            </button>
            <input
              placeholder="Comment"
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
            />
            <button onClick={createComment}>send</button>
          </div>
        );
      })}
    </div> */
}
//////////////////////////////
{
  /* <Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Email address</Form.Label>
  <Form.Control
    type="email"
    placeholder="Name..."
    onChange={(event) => {
      setNewName(event.target.value);
    }}
  />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Example textarea</Form.Label>
  <Form.Control
    placeholder="POST"
    onChange={(event) => {
      setNewPost(event.target.value);
    }}
    rows={3}
  />
</Form.Group>
<Button className="btn1" variant="Dark" onClick={createUser}>
  Create منشور
</Button>
</Form>
{users.map((user) => {
return (
  <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.post}</Card.Text>
      <Card.Link>{user.age}</Card.Link>
      <Card.Subtitle className="mb-2 text-muted">
        {user.Comment}
      </Card.Subtitle>
    </Card.Body>
    <Button
      className="btn1"
      variant="Dark"
      onClick={() => {
        updateUser(user.id, user.age);
      }}
    >
      like
    </Button>

    <Button
      className="btn1"
      variant="Dark"
      onClick={() => {
        deleteUser(user.id);
      }}
    >
      {" "}
      Delete post
    </Button>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Components</Form.Label>
      <Form.Control
        type="email"
        placeholder="Comment"
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      />
    </Form.Group>
    <Button className="btn1" variant="Dark" onClick={createComment}>
      send
    </Button>
  </Card>
);
})} */
}
