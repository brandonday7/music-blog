import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PostList from "../components/PostList";
import NewPostDialog from "../components/NewPostDialog";

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

const GetPosts = ({ open, closeDialog }) => (
	<Query query={GET_POSTS}>
		{({ loading, error, data, refetch }) => {
			if (error) return null;
			else if (loading) return "Loading...";
			else {
				return (
					<div>
						<PostList posts={data.getPosts} />
						<NewPostDialog
							open={open}
							closeDialog={closeDialog}
							refetch={refetch}
						/>
					</div>
				);
			}
		}}
	</Query>
);

export default GetPosts;
