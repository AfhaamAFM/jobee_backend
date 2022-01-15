import { Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.send('This is Rest api created by afhaam')

});

export default router;
