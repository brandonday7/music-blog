import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import "../components/PostList/post-list.css";
import x from "../images/x.svg";

class DeletePost extends Component {
  DELETE_POST = gql`
    mutation delete($deleteParams: DeletePostInput!) {
      deletePost(input: $deleteParams) {
        errors
        deleted
      }
    }
  `;

  render() {
    const { id, refetch } = this.props;
    return (
      <Mutation
        mutation={this.DELETE_POST}
        variables={{
          deleteParams: { id }
        }}
        onCompleted={() => refetch()}
      >
        {deletePost => (
          <div className="delete-div" onClick={() => deletePost()}>
            <img src={x} alt="X" className="delete-icon" />
          </div>
        )}
      </Mutation>
    );
  }
}

export default DeletePost;
