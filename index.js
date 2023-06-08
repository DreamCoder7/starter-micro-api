const express = require("express");
const mongoose = require("mongoose");
const assistantController = require("./controllers/assitance");

const app = express();
// app.use(express.urlencoded());

const uri = `mongodb+srv://${process.env.CYCLIC_DB_USER}:${process.env.CYCLIC_DB_PASS}@cluster0.uwydggw.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then((res) => {
    app.listen(process.env.PORT || 3000);

    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/requirements", assistantController.postRequirement);

app.get("/", (req, res) => {
  console.log(`Just got a request at ${req.url}!`);
  res.send("Yo!");
  res.end();
});

// Openai
// app.http('gptfunction', {
//   methods: ['GET', 'POST'],
//   authLevel: 'anonymous',
//   handler: async (request, context) => {

//       try {
//           if (!request.json) {
//               context.log('Invalid request');
//               return { status: 400, body: 'Invalid request' };
//           }

//           const { messages } = await request.json();

//           if (!Array.isArray(messages)) {
//               context.log('Invalid messages format');
//               return { status: 400, body: 'Invalid messages format' };
//           }

//           context.log(messages)

//           const [completion, requirements, images] = await Promise.all([
//               openai.createChatCompletion({
//                   model: "gpt-4",
//                   messages: [{ role: "system", content: "You are an assistant" }, ...messages]
//               }),
//               openai.createChatCompletion({
//                   model: "gpt-4",
//                   messages: [{ role: "system", content: "As a requirements generator" }, ...messages]
//               }),
//               openai.createChatCompletion({
//                   model: "gpt-4",
//                   messages: [{ role: "system", content: 'You are an assistant and you return one of the following tags based on the conversation. tags: "mobile", "web", "react", "ecommerce"' }, ...messages]
//               }),
//           ]);

//           let tagResponse = images.data.choices[0].message.content;
//           let tags = tagResponse.split(',').map(tag => tag.trim());
//           let imageLinks = tags.map(tag => tagsMap[tag]).filter(Boolean);

//           return { jsonBody: {
//               completion: completion.data.choices[0].message,
//               requirements: requirements.data.choices[0].message,
//               images: imageLinks,
//           } };
//       } catch (error) {
//           context.log(Error: ${error.message});
//           return { status: 500, body: 'Internal server error' };
//       }
//   }
// });
