import { Router } from 'express';
const router = Router();
import { register } from '../controller/userController.js';


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register',register);


export default router
