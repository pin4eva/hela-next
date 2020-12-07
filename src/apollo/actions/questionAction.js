import { GET_QUESTION, GET_QUESTIONS } from "apollo/queries/questionQuery";
import { initializeApollo } from "../index";

export const getQuestions = async () => {
  const apolloClient = initializeApollo();

  let { data } = await apolloClient.query({
    query: GET_QUESTIONS,
  });
  data = data?.getQuestions || [];

  data = data.map((question) => ({
    ...question,
    _id: question._id.toString(),
  }));

  return data || [];
};

export const getQuestion = async (slug) => {
  const apollo = initializeApollo();

  let { data } = await apollo.query({
    query: GET_QUESTION,
    variables: { slug },
  });

  data = data?.getQuestion;
  data = { ...data, _id: data._id.toString() };

  return data || {};
};
