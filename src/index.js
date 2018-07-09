import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from "apollo-boost";

import gql from "graphql-tag";

const client = new ApolloClient({
  uri: `http://${process.env.REACT_APP_API}/graphql`
  // uri: "http://localhost:3001/graphql"
});

// import { ApolloProvider } from "react-apollo";

client
  .query({
    query: gql`
			{
			  getArtists {
			    name
			    tracks {
			      title
			    }
			  }
			}
    `
  })
  .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
