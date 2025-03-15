const OpenAI = require('openai')




const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.OPENAI_API_KEY
});
const openAiChatDeepseek = async(req, res)=>{
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "deepseek-chat",
          });
        
          console.log(completion.choices[0].message.content, '>>>> content msg');
          res.json({status: true, chat: completion.choices[0].message.content})
    } catch (error) {
        res.json({status: false, error: error?.message})
    }
    
}

module.exports = openAiChatDeepseek