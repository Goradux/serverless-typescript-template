import type {
  Handler,
  Context,
  APIGatewayProxyResultV2,
  APIGatewayProxyEventV2,
} from "aws-lambda";

export const handler: Handler = async (
  _event: APIGatewayProxyEventV2,
  _context: Context
): Promise<APIGatewayProxyResultV2> => {
  console.log("Hello, Lambda 1!");

  return {
    statusCode: 200,
    body: process.env.CUSTOM_VAR,
  };
};
