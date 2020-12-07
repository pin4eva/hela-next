import { initializeApollo } from "../index";
import {
  GET_NOTES_BY_CAT,
  GETNOTE_QUERY,
  GETNOTES_QUERY,
} from "../queries/noteQuery";

export const getNotesByCat = async (category) => {
  const apollo = initializeApollo();

  const { data } = await apollo.query({
    query: GET_NOTES_BY_CAT,
    variables: { category },
  });

  return data.getNotesByCat || [];
};

export const getNote = async (slug) => {
  const apollo = initializeApollo();

  const { data } = await apollo.query({
    query: GETNOTE_QUERY,
    variables: { slug },
  });

  return data.getNote;
};

export const getNotes = async () => {
  const apollo = initializeApollo();

  const { data } = await apollo.query({
    query: GETNOTES_QUERY,
  });

  return data.getNotes;
};
