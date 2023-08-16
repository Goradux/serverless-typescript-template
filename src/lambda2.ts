import type { Handler, Context } from "aws-lambda";

export const handler: Handler = async (_event: unknown, _context: Context) => {
  console.log("Hello, Lambda 2!");

  return {
    statusCode: 200,
  };
};
