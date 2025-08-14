import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { schemaScientificPaper } from "./schema-scientific-paper.js";
import * as fs from "fs";
dotenv.config();

const ai = new GoogleGenAI({ location: "uk-west1" });

const importFile = "Epistasis_double_KOs.pdf";
const topic = "synthetic biology";
const documentType = "cientific paper";
const schema = schemaScientificPaper;

async function main(schema, topic, documentType, importFile) {
  const contents = [
    {
      text: `You are a ${topic} expert. I will provide you with the text from a ${documentType}.
    Your task is to extract the key information from the document according to the provided schema.
    For any field where the information is not present in the document, you must return a null value.
    `,
    },
    {
      inlineData: {
        mimeType: "application/pdf",
        data: Buffer.from(fs.readFileSync(importFile)).toString("base64"),
      },
    },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: contents,
    config: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });
  console.log(response.text);
}

main(schema, topic, documentType, importFile);
