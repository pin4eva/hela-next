import { Report, RepComment } from "models/Report";
import Judge from "models/Judge";
import { authentication } from "utils/auth";

export default {
  Query: {
    getReports: async () => {
      // await authentication(token);

      try {
        let reports = await Report.find()
          // .limit(5)
          .sort({ createdAt: -1 })
          .populate("added_by");
        // .populate({
        //   path: "comments",
        //   populate: {
        //     path: "author",
        //     select: ["_id", "name"],
        //   },
        // })

        // reports = reports.map((report) => {
        //   const comments = RepComment.find({ report: report._id });
        //   return {
        //     ...report._doc,
        //     comments,
        //   };
        // });
        return reports;
      } catch (error) {
        throw new Error(error);
      }
    },
    getLimitedReports: async (_, { skip, limit }) => {
      // await authentication(token);

      try {
        let reports = await Report.find()
          .skip(skip)
          .limit(limit)
          .sort({ createdAt: -1 })
          .populate("added_by");
        // .populate({
        //   path: "comments",
        //   populate: {
        //     path: "author",
        //     select: ["_id", "name"],
        //   },
        // })

        // reports = reports.map((report) => {
        //   const comments = RepComment.find({ report: report._id });
        //   return {
        //     ...report._doc,
        //     comments,
        //   };
        // });
        return reports;
      } catch (error) {
        throw new Error(error);
      }
    },
    getReport: async (_, { slug }) => {
      // await auth();
      try {
        let report = await Report.findOne({ slug });
        let comment = await RepComment.find({ report: report._id }).populate({
          path: "author",
          select: ["_id", "name"],
        });

        return { ...report._doc, comment };
      } catch (error) {
        throw new Error(error);
      }
    },
    getRepCommentsByReport: async (_, { report }) => {
      try {
        const comments = await RepComment.find({ report }).populate("author");
        return comments;
      } catch (error) {
        throw new Error(error);
      }
    },
    getRepComments: async () => {
      try {
        const comments = await RepComment.find().populate("report author");
        return comments;
      } catch (error) {
        throw new Error(error);
      }
    },
    getMyReports: async (_, { skip, limit }, { token }) => {
      const user = await authentication(token);
      let reports;
      try {
        if (user.role === "editor") {
          reports = await Report.find({ added_by: user._id })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .populate("added_by");
        } else {
          reports = await Report.find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .populate("added_by");
        }
        return reports;
      } catch (error) {
        throw Error(error);
      }
    },
  },
  Mutation: {
    addReport: async (_, { input }, { token }) => {
      const user = await authentication(token);
      const { year, vol } = input;
      let volume = vol.split(" ");
      volume = Number(volume[1]);
      let count = await Report.countDocuments();
      count = (count + 1).toString();
      let SN = count.padStart(4, "1000");
      let caseRef = `HELA-${year}-vol-${volume}-${Number(SN)}`;
      const reports = await Report.findOne({ caseRef });
      if (reports) {
        caseRef = `HELA-${year}-vol-${volume}-${Number(SN) + 1}`;
      }

      try {
        const report = await Report.create({
          ...input,
          caseRef,
          added_by: user._id,
        });
        return report;
      } catch (error) {
        throw new Error(error);
      }
    },
    updateReport: async (_, { input }, { token }) => {
      const user = await authentication(token);
      try {
        const report = await Report.findOneAndUpdate(
          { _id: input._id },
          { ...input, updated_by: user._id },
          {
            new: true,
          }
        );
        return report;
      } catch (error) {
        throw new Error(error);
      }
    },
    likeReport: async (_, { _id }) => {
      let report = Report.findById(_id);
      if (!report) throw Error("No record found");
      // console.log(object);
      try {
        report = await Report.findOneAndUpdate(
          { _id },
          {
            $inc: { likes: 1 },
          },
          { new: true }
        );
        return report.likes;
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteReport: async (_, { _id }, { token }) => {
      await authentication(token);
      try {
        const report = await Report.findOne({ _id });
        if (!report) throw new Error("No record found");
        await Judge.findOneAndUpdate(
          { reports: report._id },
          { $pull: { reports: report._id } },
          { new: true }
        );
        report.remove();
        return report._id;
      } catch (error) {
        throw new Error(error);
      }
    },
    // RepComment
    addRepComment: async (_, { report, content }, { token }) => {
      const author = await authentication(token);

      try {
        let comment = await RepComment.create({
          author,
          report,
          content,
        });

        comment = await RepComment.findById(comment._id).populate("author");
        return comment;
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteRepComment: async (_, { _id }, { token }) => {
      await authentication(token);
      try {
        const comment = await RepComment.findOne({ _id });
        if (!comment) throw new Error("No record found");
        await Report.findOneAndUpdate(
          { comments: comment._id },
          { $pull: { comments: comment._id } },
          { new: true }
        );
        comment.remove();
        return comment._id;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
