import express from 'express';
import sessionsApi from './sessions';
import usersApi from './users';
import messagesApi from './messages';
import bookApi from './book';
import renewApi from './renews';
import bookdetailApi from './book-detail';
const router = express.Router();
router.use('/sessions', sessionsApi);
router.use('/users', usersApi);
router.use('/messages', messagesApi);
router.use('/users/current/books/borrowed', bookApi);
router.use('/users/books/renew', renewApi);
router.use('/users/current/books/book-detail', bookdetailApi);
export default router;
