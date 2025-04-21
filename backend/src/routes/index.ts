import express, {Request, Response, NextFunction} from 'express';
import db from './../db/getDB';
const router = express.Router();

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {

  const collection = db.collection('test');
  const result = await collection.insertOne({ name: 'John', age: 30, date: Date.now() });

  res.send('Inserted document with ID:' + result.insertedId);
});

export default router;