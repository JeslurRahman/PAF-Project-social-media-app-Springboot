import React, { Component } from "react";
import "./MainPage.css";
import Post from "./Post";
import uploadImage from "../../images/upload.png";
import { storage, auth } from "../firebase";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [],
      progressBar: "",
    };
  }

  upload = (event) => {
    let image = event.target.files[0];
    const thisContext = this;
    if (image == null || image == undefined) return;

    var uploadTask = storage.ref("images").child(image.name).put(image);
    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        thisContext.setState({ progressBar: progress });
      },
      function (error) {},
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log(downloadURL);

          let payload = {
            postId: Math.floor(Math.random() * 100000).toString(),
            userId: JSON.parse(localStorage.getItem("users")).uid,
            postPath: downloadURL,
            timeStamp: new Date().getTime(),
            likeCount: 0,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

          fetch("http://localhost:8080/post", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              thisContext.getPost();
            })
            .catch((error) => {});
        });
      }
    );
  };

  render() {
    return (
      <div>
        <div className="mainpage__container">
          <div className="mainpage__divider"></div>
          <div className="fileupload">
            <label for="file-upload">
              <img className="mainpage__uploadicon" src={uploadImage} />
            </label>
            <input onChange={this.upload} id="file-upload" type="file" />
          </div>
          <div className="mainpage__divider"></div>
        </div>
        <div className="upload_text">{this.state.progressBar}</div>

        <Post
          id="1234"
          userName="elonmusk"
          postImage="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
          likes="12k"
        />
        <Post
          id="1234"
          userName="elonmusk"
          postImage="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
          likes="12k"
        />
        <Post
          id="1234"
          userName="elonmusk"
          postImage="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600"
          likes="12k"
        />
        <Post
          id="1234"
          userName="elonmusk"
          postImage="https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=600"
          likes="12k"
        />
      </div>
    );
  }
}

export default MainPage;
