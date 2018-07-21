import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PostList from "../components/PostList"

const GET_POSTS = gql`
		{
			getPosts {
		    title
		    track {
		      title
		    }
		    artist {
		      name
		    }
		    description
		    image
		  }
		}
`;

const GetPosts = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
    	if (error) return null
    	else if (loading) return "Loading..."
    	else {
    		return <PostList posts={data.getPosts} />
    	}
    }}
  </Query>
);

export default GetPosts;