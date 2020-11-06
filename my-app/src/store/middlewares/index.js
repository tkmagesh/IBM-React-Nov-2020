import { applyMiddleware } from 'redux';
import logger from './logger';
import asyncMiddleware from './asyncMiddleware';

const rootMiddleware = applyMiddleware(logger, asyncMiddleware);

export default rootMiddleware;