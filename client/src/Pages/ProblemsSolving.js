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
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../style/Communtiy.css";
import { storage } from "../firebase/firebase";
import { v4 } from "uuid";
import { ref, uploadBytes } from "firebase/storage";
export default function ProblemsSolving() {
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState("");
  const [visible, setVisible] = useState(false);

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      post: newPost,
      name: newName,
      Comment: newComment,
      age: Number(newAge),
    });
    window.location.reload();
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
    window.location.reload();
  };

  ///////////////////////////
  const updateComment = async (Comment) => {
    const userComment = doc(db, "users", Comment);
    await updateComment(userComment);
    window.location.reload();
  };

  const createComment = async () => {
    await addDoc(usersCollectionRef, {
      Comment: newComment,
    });
    window.location.reload();
  };
  //////////////////////////
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload();
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  function createCommentUser() {
    createUser();
    // imagupload();
  }

  return (
    <div className="App1">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Name..."
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>post</Form.Label>
          <Form.Control
            placeholder="POST"
            onChange={(event) => {
              setNewPost(event.target.value);
            }}
            rows={3}
          />
        </Form.Group>
        <Button className="btn1" variant="Dark" onClick={createUser}>
          Create Post
        </Button>
      </Form>
      {users.map((user) => {
        return (
          <Card className="post">
            <ButtonGroup className="ttt">
              <DropdownButton
                as={ButtonGroup}
                title="..."
                id="bg-nested-dropdown"
                className="ttt"
              >
                <Dropdown.Item
                  eventKey="1"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </Dropdown.Item>
                <Dropdown.Item eventKey="2"></Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>

            <Card.Body>
              <Card.Title className="nnnz">{user.name}</Card.Title>
              <Card.Text>{user.post}</Card.Text>
              <Card.Link className="lll"> like:{user.age}</Card.Link>
              <Card.Subtitle className="mb-2 text-muted">
                {user.Comment}
              </Card.Subtitle>
              <img
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
                src="https://cdn-icons-png.flaticon.com/512/633/633759.png"
                className="like"
              />
            </Card.Body>

            {/* <Button
              className="btn1"
              variant="Dark"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete post
            </Button> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
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
      })}
    </div>
  );
}
