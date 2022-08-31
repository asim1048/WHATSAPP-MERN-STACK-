import e from 'express';
import express from 'express'

import { newConservation,getConservation } from '../controller/conservation-controller.js';
import { newMessage,getMessages } from '../controller/message-controller.js';

import { addUser ,getUsers} from '../controller/user-conroller.js';

import { uploadFile,getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js'

const route=express.Router();

route.post('/add',addUser);
route.get('/users',getUsers);

route.post('/conservation/add',newConservation)

route.post('/conservation/get',getConservation);

route.post('/message/add',newMessage);

route.get('/message/get/:id',getMessages);

route.post('/file/upload',upload.single("file"),uploadFile);

route.get('/file/:filename',getImage);

export default route;