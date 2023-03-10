const express = require('express');
const router = express.Router();
const db = require('../models/myconnection');

// 讀出所有hotel的資料
// http://localhost:3000/hotel/
router.get('/', async (req, res) => {
  // console.log(process.env.DB_Password);
  // res.send('hotel page');
  const sql = "SELECT * FROM `hotel`"; 
  const [rows, fields] = await db.query(sql);
  res.json(rows);
});

// http://localhost:3000/hotel/abc/???
// router.get('/abc/:cid', async (req, res) => {
// http://localhost:3000/hotel/???
router.get('/:cid', async (req, res) => {
  const hotelId = req.params.cid;
  const sql = "SELECT `h_id`,`h_name` FROM `hotel` WHERE h_id=?"; 
  const [rows, fields] = await db.query(sql,[h_id]);
  res.json(rows[0]);
});

//新增、修改、刪除

module.exports = router;
