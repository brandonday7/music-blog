import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

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
        {deletePost => <p onClick={() => deletePost()}>X</p>}
      </Mutation>
    );
  }
}

export default DeletePost;
