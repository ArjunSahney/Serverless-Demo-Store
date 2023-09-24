// backend/scripts/list-tables.js
import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb'

const client = new DynamoDBClient({})
const command = new ListTablesCommand({})
try {
  const result = await client.send(command)
  console.log('DynamoDB tables', result.TableNames)
} catch (err) {
  console.error(err)
}