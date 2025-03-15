const express = require("express");
const openAiChatDeepseek = require("../controllers/openAiChat.controller")


const openAiChatRouter = express.Router();

openAiChatRouter.get('/deepseek/chat', openAiChatDeepseek);

module.exports = openAiChatRouter;