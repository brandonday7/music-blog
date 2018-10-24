import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

class CreatePost extends Component {
  NEW_POST = gql`
    mutation newPost($newPostParams: NewPostInput!) {
      newPost(input: $newPostParams) {
        posted
        errors
      }
    }
  `;

  render() {
    const { newPostParams, closeDialog, refetch } = this.props;
    return (
      <Mutation
        mutation={this.NEW_POST}
        variables={{
          newPostParams
        }}
        onCompleted={() => {
          refetch();
          closeDialog();
        }}
      >
        {newPost => (
          <div className="create button" onClick={newPost}>
            Create
          </div>
        )}
      </Mutation>
    );
  }
}

export default CreatePost;
