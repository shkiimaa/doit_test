const express = require('express');
const router = express.Router();
const BoardModels = require('../models/board');
const { StatusCodes } = require('http-status-codes');

// get board list
router.get('/board', async (req, res) => {
  try {
    const getBoard = await BoardModels.getBoard();
    res.status(StatusCodes.OK).json(getBoard);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err });
  }
});

// create board
router.post('/board', async (req, res) => {
  const { userInput } = req.body;
  try {
    const postBoard = await BoardModels.postBoard(userInput);
    res.status(StatusCodes.OK).json(postBoard);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err });
  }
});

//get board
router.get('/board/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const getSelectedBoard = await BoardModels.getSelectedBoard(id);
    res.status(StatusCodes.OK).json(getSelectedBoard);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err });
  }
});

// delete board
router.post('/board/delete/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deleteBoard = await BoardModels.deleteBoard(id);
    console.log(deleteBoard);
    res.status(StatusCodes.OK).json(deleteBoard);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err });
  }
});

// update board
router.post('/board/update/:id', async (req, res) => {
  const { id } = req.params;
  const { userInput } = req.body;
  try {
    const patchBoard = await BoardModels.patchBoard(id, userInput);
    console.log(patchBoard, '결과');
    res.status(StatusCodes.OK).json(patchBoard);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err });
  }
});

module.exports = router;
