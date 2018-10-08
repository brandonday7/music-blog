import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

class CreatePost extends Component {
  NEW_POST = gql`
    mutation CreatePost($newCatParams: NewServiceCatAttributes!) {
      newServiceCat(params: $newCatParams) {
        success
        errors
      }
    }
  `;

  render() {
    return (
      <Mutation
        mutation={this.NEW_POST}
        variables={{
          newCatParams
        }}
        onCompleted={data => {
          console.log(data);
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
