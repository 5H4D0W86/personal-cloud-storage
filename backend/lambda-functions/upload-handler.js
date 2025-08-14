const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const s3Client = new S3Client({ region: process.env.AWS_REGION });

exports.handler = async (event) => {
    const bucketName = 'personal-cloud-storage-jared-1755054887';
    
    console.log('Event received:', JSON.stringify(event, null, 2));
    
    try {
        // Handle API Gateway event format
        if (!event.body) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: 'Missing request body' })
            };
        }

        const { fileName, fileContent, contentType } = JSON.parse(event.body);
        
        if (!fileName || !fileContent) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: 'Missing fileName or fileContent' })
            };
        }
        
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: fileName,
            Body: Buffer.from(fileContent, 'base64'),
            ContentType: contentType || 'application/octet-stream'
        });
        
        await s3Client.send(command);
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            body: JSON.stringify({
                message: 'File uploaded successfully',
                fileName: fileName,
                bucket: bucketName
            })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: error.message })
        };
    }
};
