const Board = require('../schemas/board');

exports.getBoard = async () => {
  const getBoard = await Board.find({});
  return getBoard;
};

exports.patchBoard = async (id, board) => {
  const patchBoard = await Board.findOneAndUpdate(
    { _id: id },
    { $set: { ...board } },
    { new: true }
  );
  return patchBoard;
};

exports.postBoard = async (board) => {
  const postBoard = await Board.create(board);
  return postBoard;
};

exports.deleteBoard = async (id) => {
  await Board.deleteOne({ _id: id });
  const getBoard = await Board.find({});
  return getBoard;
};

exports.getSelectedBoard = async (id) => {
  const getSelectedBoard = await Board.findOne({ _id: id });
  return getSelectedBoard;
};
