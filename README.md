# Serverless Retail Demo Store

This codebase is for a sample e-commerce store used for demo purposes. The code features basic AWS Lambda functions for products, while the UI is uploaded to an Amazon S3 bucket. The following code was largely adapted from FourTheorem and AWS-Samples for Sedai -- an autonomous cloud cost optimization software.

## Deployment Steps

### 1. Build the Frontend

To prepare the frontend assets for deployment, run the build command:

```
npm run build --workspace=frontend
```

### 2. Set up the Frontend Bucket Name

Export the desired S3 bucket name as an environment variable. This makes it easier to reference in subsequent steps:

```
export FRONTEND_BUCKET=retaildemostore
```

### 3. Create the S3 Bucket

Create an S3 bucket that will host the frontend assets:

```
aws s3 mb s3://$FRONTEND_BUCKET
```

### 4. Upload Frontend Assets to the S3 Bucket

Copy the built frontend assets to the previously created S3 bucket:

```
aws s3 cp frontend/dist "s3://$FRONTEND_BUCKET" --recursive
```

### 5. Create an S3 Bucket Policy

To make the frontend assets publicly accessible, create a bucket policy with the following content. Save this to a file named `policy.json`:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::<FRONTEND_BUCKET>/*"
      ]
    }
  ]
}
```

Then, apply the policy to the S3 bucket:

```
aws s3api put-bucket-policy --bucket $FRONTEND_BUCKET --policy file://policy.json
```

### 6. Set Up the DynamoDB Table

Create a DynamoDB table named `product-table` to store product data:

```
aws dynamodb create-table \
  --table-name product-table \
  --attribute-definitions AttributeName=id,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST
```

### 7. Navigate to the Backend Directory

```
cd backend/
```

### 8. Install Necessary AWS SDK Libraries

Install the required AWS SDK libraries for working with DynamoDB and SQS:

```
npm i --save @aws-sdk/client-dynamodb
npm i --save @aws-sdk/lib-dynamodb
npm i --save @aws-sdk/client-sqs
```

### 9. Validate the Serverless Application Model (SAM) Template

Check if the SAM template is valid:

```
sam validate
```

### 10. Build the Backend

Build the backend using the SAM CLI:

```
sam build --beta-features
```

### 11. Deploy the Backend

Deploy the backend using the SAM CLI. Follow the guided prompts:

```
sam deploy --guided
```

After deployment, you should receive an API ID as output.

### 12. Create a Settings File

Using the provided API ID, create a `settings.json` file with the following content:

```
{
  "apiBaseUrl": "https://<restapiid>.execute-api.eu-west-1.amazonaws.com/Prod"
}
```

### 13. Upload the Settings File to the S3 Bucket

Finally, upload the `settings.json` file to the `.well-known` directory in the S3 bucket:

```
aws s3 cp settings.json "s3://$FRONTEND_BUCKET/.well-known/settings.json"
```

After following these steps, the Serverless Retail Demo Store should be successfully deployed!

