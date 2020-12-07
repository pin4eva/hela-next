const { GraphQLScalarType } = require("graphql")
const { Kind } = require("graphql/language")
const dayjs = require("dayjs")

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  parseValue(value) {
    return dayjs(value) // value from the client
  },
  serialize(value) {
    return dayjs(value) // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return dayjs(ast.value) // ast value is always in string format
    }
    return null
  },
})

module.exports = { dateScalar }
