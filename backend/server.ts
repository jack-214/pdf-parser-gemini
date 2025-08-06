import Fastify from "fastify";
import multer from "fastify-multer";
import cors from "@fastify/cors";
import { parsePdfRoute } from "./routes/parsePdfRoute";

const fastify = Fastify({ logger: true });
fastify.register(cors);
fastify.register(multer.contentParser);
fastify.register(parsePdfRoute);

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
    console.log(`Server running on https://localhost:3001`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
