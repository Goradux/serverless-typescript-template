import type { Handler, Context, ScheduledEvent } from "aws-lambda";

export const handler: Handler = async (
  _event: ScheduledEvent,
  _context: Context,
) => {
  console.log("Hello, Lambda 2!");

  return {
    statusCode: 200,
  };
};
