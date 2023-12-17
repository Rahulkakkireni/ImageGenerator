// import express from 'express';
// import axios from 'axios';
// import cors from 'cors';

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

// const apiKey = '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'; // Replace with your actual OpenAI API key
// const apiUrl = 'https://api.openai.com/v1/davinci/generate';

// app.post('/image', async (req, res) => {
//   const { prompt } = req.body;
//   console.log(prompt)

//   try {
//     const response = await axios.post(
//       apiUrl,
//       {
//         prompt: prompt,
//         max_tokens: 50, // Adjust as needed
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`,
//         },
//       }
//     );

//     const generatedImages = response.data.choices[0].text;
//     res.json({ images: generatedImages });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.listen(3002, () => {
//   console.log('DALL·E2 service started at port 3002');
// });
