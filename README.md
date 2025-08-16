# Personal Cloud Storage – AWS Implementation

## Vision
This project is a secure and scalable personal cloud storage solution built entirely on AWS. It supports file upload, download, sharing, and synchronization, while demonstrating end-to-end cloud architecture using serverless technologies and modern web development practices.

## Architecture Overview
```

React Frontend → API Gateway → Lambda Functions → S3 Storage
↓
DynamoDB (metadata)
↓
Cognito (authentication)
↓
CloudFront (CDN)

````

### Core AWS Services
- **Amazon S3** – Object storage backend for uploaded files  
- **AWS Lambda** – Serverless file processing and API integration  
- **Amazon API Gateway** – RESTful API endpoints  
- **Amazon DynamoDB** – Metadata and user data storage  
- **Amazon Cognito** – User authentication and authorization  
- **Amazon CloudFront** – Global CDN for optimized content delivery  
- **Amazon VPC** – Secure networking layer  

---

## Features Roadmap

**Phase 1: Core Storage (Weeks 1–3)**  
- User registration and authentication  
- File upload/download functionality  
- Basic folder structure  
- Simple web interface  
- File metadata storage  

**Phase 2: Enhanced Features (Weeks 4–6)**  
- Secure file sharing with expiring links  
- Image thumbnail generation  
- Search functionality  
- Usage analytics dashboard  
- Email notifications  

**Phase 3: Advanced Features (Weeks 7–10)**  
- File versioning  
- Real-time synchronization  
- Collaboration features  
- Mobile application (React Native)  
- Desktop synchronization client  

---

## Technology Stack

**Backend**  
- AWS Lambda (Node.js / Python)  
- Amazon API Gateway  
- Amazon S3  
- Amazon DynamoDB  
- Amazon Cognito  

**Frontend**  
- React.js  
- AWS SDK for JavaScript  
- Material-UI or Tailwind CSS  

**Infrastructure**  
- Terraform / CloudFormation for IaC  
- GitHub Actions (CI/CD pipelines)  
- Amazon CloudWatch (monitoring and alerting)  

---

## Getting Started

### Prerequisites
- AWS Account with appropriate IAM permissions  
- Node.js 18+  
- Terraform installed locally  
- Git  

### Local Development Setup
```bash
# Clone the repository
git clone https://github.com/5H4D0W86/personal-cloud-storage
cd personal-cloud-storage

# Install dependencies
npm install

# Configure AWS credentials
aws configure

# Deploy infrastructure
cd infrastructure
terraform init
terraform plan
terraform apply

# Start development server
npm run dev
````

---

## Project Structure

```
personal-cloud-storage/
├── frontend/          # React web application
├── backend/           # Lambda functions
├── infrastructure/    # Terraform configurations
├── docs/              # Documentation (architecture diagrams, ADRs, runbooks)
└── tests/             # Unit and integration tests
```

---

## Cost Estimation

* **Development:** AWS Free Tier eligible
* **Light usage (50GB):** \~\$5–10 per month
* **Medium usage (500GB):** \~\$15–25 per month

---

## Security Features

* End-to-end encryption for file storage
* IAM role-based access control
* Secure file sharing with expiring links
* Audit logging with CloudWatch

---

## Contributing

This is a personal learning and development project. Feedback, suggestions, and contributions are welcome.

---

## License

MIT License

---

**Built as part of a cloud engineering learning journey to practice serverless design, infrastructure as code, and professional DevOps workflows.**

```

---


