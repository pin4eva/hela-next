const Judge = require("../../models/Judge")

module.exports = {
  Query: {
    getJudges: async () => {
      try {
        let judges = await Judge.find().populate("reports")

        return judges
      } catch (error) {
        throw new Error({ msg: error })
      }
    },
  },
  Mutation: {
    addJudge: async (_, args) => {
      try {
        const judge = await Judge.create({
          ...args,
          // slug: await slugify(args.name),
        })
        return judge
      } catch (error) {
        throw new Error(error)
      }
    },
    updateJudge: async (_, args) => {
      try {
        const judge = await Judge.findOneAndUpdate({ _id: args._id }, args, {
          new: true,
        })
        return judge
      } catch (error) {
        throw new Error(error)
      }
    },
    deleteJudge: async (_, { _id }) => {
      try {
        const judge = await Judge.findOne({ _id })
        if (!judge) throw new Error("No record found")
        judge.remove()
        return judge._id
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
