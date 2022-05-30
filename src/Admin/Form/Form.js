
import React,{Components}from "react";
import axios from "axios";
// import ShowPost from "./showPosts/showPost";
export default function Form(props) {
    return (
      <div className="formclass">
      <form onSubmit={(e) => {props.handlerSubmit(e)}}>
        <label htmlFor="status">Status</label>
        <select id="status" name="status" onChange={(e) => {
            props.handerlechange(e);
          }}>
          <option value="main">main</option>
          <option value="new">news</option>
          <option value="outstanding">outstanding</option>
        </select>
        <label htmlFor="title">Title</label>
        <input type="text" onChange={(e) => {
            props.handerlechange(e);
          }} id="title" name="title" placeholder="Enter title for post..." />
        <label htmlFor="content">Content</label>
        <input onChange={(e) => {
            props.handerlechange(e);
          }} type="text" id="content" name="content" placeholder="Enter content for post..." />
        <label htmlFor="image">Image</label>
        <input onChange={(e) => {
            props.handerlechange(e);
          }} type="text" id="image" name="image" placeholder="Enter image for post..." />
        <button type="submit" className="w3-button w3-teal">
          {props.stateButton}
        </button>
      </form>
    </div>
    );
}