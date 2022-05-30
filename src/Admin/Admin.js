import Form from './Form/Form';
import ManagementPost from './ManagementPost/ManagementPost';
import { useState, useEffect } from "react";
import axios from "axios";
function Admin() {
  const [post, setPost] = useState({
    id: "",
    status: "",
    image: "",
    title: "",
    content:""
  });
  const [listProduct, setListProduct] = useState([]);
  const [stateButton, setStateButton] = useState("Add");
  const getData = () => {
    axios
      .get(`https://61bc1bd2d8542f00178245ab.mockapi.io/article`)
      .then((res) => {
        setListProduct(res.data);
      })
      .catch((error) => console.log(error));
  };
    useEffect(() => {
      getData();
    }, []);
  const handlerChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setPost((prev) => {
      const prevState = { ...prev };
      prevState[nam] = val;
      return prevState;
    });
  };
  const addPost = (e) => {
    e.preventDefault();
    stateButton === "Add"
      ? axios
          .post(`https://61bc1bd2d8542f00178245ab.mockapi.io/article`, {
            status: post.status,
            image: post.image,
            title: post.title,
            content: post.content
          })
          .then((res) => {
            alert("Successful!");
            setPost((prev) => {
              const prevState = { ...prev };
              prevState.status = "";
              prevState.image = "";
              prevState.title = "";
              prevState.content = "";

              console.log(prevState);
              return prevState;
            });
            getData();
          })
      : axios
          .put(
            `https://61bc1bd2d8542f00178245ab.mockapi.io/article${post.id}`,
            {
              id: post.id,
              status: post.status,
              image: post.image,
              title: post.title,
              content: post.content,

            }
          )
          .then((res) => {
            alert("Updated Successful!");
            setPost((prev) => {
              const prevState = { ...prev };
              prevState.status = "";
              prevState.image = "";
              prevState.title = "";
              prevState.content = "";

              console.log(prevState);
              return prevState;
            });
            setStateButton("Add");
            getData();
          });
  };
  const showInput = (product) => {
    setPost((prev) => {
      const prevState = { ...prev };
      prevState.status = product.status;
      prevState.image = product.image;
      prevState.title = product.title;
      prevState.content = product.content;
      prevState.id = product.id;
      return prevState;
    });
    setStateButton("Update");
  };
  const deleteProduct = (product) => {
          setPost((prev) => {
            const prevState = { ...prev };
            prevState.id = product.id;
            return prevState;
          });
          axios
            .delete(
              `https://61bc1bd2d8542f00178245ab.mockapi.io/article/${product.id}`
            )
            .then((res) => {
              getData();
            });
  } 
  return (
    <>
      <Form
        status={post.status}
        image={post.image}
        title={post.title}
        content={post.content}

        handerlechange={(e) => {
          handlerChange(e);
        }}
        handlerSubmit={(e) => {
          addPost(e);
        }}
        stateButton={stateButton}
      />
      <ManagementPost
        ListProduct={listProduct}
        updateInput={(product) => {
          showInput(product);
        }}
        deleteProduct ={(product) =>{
          deleteProduct(product)
        }}
      />
    </>
  );
}
export default Admin;