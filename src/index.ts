import dotenv from 'dotenv';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

dotenv.config();
const client = new S3Client({ 
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
  } 
})
const summary = {
    "durationInMS": 24223,
    "passed": [
        "homepage.spec.js:26:5",
        "homepage.spec.js:85:5",
        "homepage.spec.js:35:5",
        "homepage.spec.js:95:5"
    ],
    "skipped": [],
    "failed": [
      "homepage.spec.js:26:5",
      "homepage.spec.js:85:5",
      "homepage.spec.js:35:5",
      "homepage.spec.js:95:5"
    ],
    "warned": [],
    "interrupted": [],
    "timedOut": [],
    "flakey": [],
    "status": "passed",
    "startedAt": 1720013326720
}

const params = {
  Bucket: 'rahul-poc',
  Key: `summary.json`,
  Body: JSON.stringify(summary)
}

const command = new PutObjectCommand(params);
try {
  const response = await client.send(command);
  console.log(response);
}catch (error) {
  console.error(error);  
}