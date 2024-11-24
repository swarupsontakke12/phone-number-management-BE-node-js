import express from 'express';
import { fetchPhoneData  , getPhoneDataOnStatus} from '../controllers/phoneController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Endpoint with authentication middleware
// router.get('/', authenticate, fetchPhoneData);
router.get('/', fetchPhoneData);
router.post('/filter-numbers' , getPhoneDataOnStatus);


export default router;
