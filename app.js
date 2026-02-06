const express = require('express');
const app = express();
const port = 3000;

// importazione router dei blogs
const blogRouter = require('./routers');