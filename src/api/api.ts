import axios from "axios";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
});

export const graphqlClient = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});
