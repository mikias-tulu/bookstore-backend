
import { NotFoundException } from '@libs/errors';
import { AsyncRouter } from 'express-async-router';
// import { isAuth } from '@libs/is-auth';
import { Request, Response } from 'express';
import authRouter from './authentication.route';
import userRouter from './user.route';
import bookRouter from './book.route';
import orderRouter from './order.route';

const router = AsyncRouter();


router.use('/api/auth', authRouter);

router.use('/api', userRouter);

router.use('/api', orderRouter);

router.use('/api', bookRouter);

router.all('*', (req: Request, res: Response) => {
  throw new NotFoundException(
    `${req.method} ${req.url} endpoint does not exist`,
  );
});

export default router;
