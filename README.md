# Serverless Retail Demo Store
This codebase is for a sample e-commerce store used for demo purposes. The code features basic Lambda functions for products, while the UI is uploaded to an S3 bucket. The following code was largely adapted from FourTheorem and AWS-Samples for Sedai -- an autonomous cloud cost optimization software. 

# Deployment Steps: 

```
npm run build --workspace=frontend
```

```
export FRONTEND_BUCKET=retaildemostore
```

```
aws s3 mb s3://$FRONTEND_BUCKET
```

```
aws s3 cp frontend/dist "s3://$FRONTEND_BUCKET" --recursive
```

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
```
aws s3api put-bucket-policy --bucket $FRONTEND_BUCKET --policy file://policy.json
```

```
aws dynamodb create-table \
  --table-name product-table \
  --attribute-definitions AttributeName=id,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST
```

```
aws dynamodb batch-write-item --request-items file://assets/load-gig.json
```

```
cd backend/
```

```
npm i --save @aws-sdk/client-dynamodb
```

```
npm i --save @aws-sdk/lib-dynamodb
```

```
npm i --save @aws-sdk/client-sqs
```

```
sam validate
```

```
sam build --beta-features
```

```
same deploy --guided
```

You should recieve and API ID as an output. From that, create a file called settings.json:

```
{
  "apiBaseUrl": "https://<restapiid>.execute-api.eu-west-1.amazonaws.com/Prod"
}
```

```
aws s3 cp settings.json "s3://$FRONTEND_BUCKET/.well-known/settings.json"
```
