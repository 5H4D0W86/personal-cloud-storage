# Personal Cloud Storage - AWS Implementation

## Vision
A secure, scalable personal cloud storage solution built on AWS that provides file upload, download, sharing, and synchronization capabilities. This project demonstrates end-to-end cloud architecture using serverless technologies and modern web development practices.

## Architecture Overview
```
Frontend (React) → API Gateway → Lambda Functions → S3 Storage
                              ↓
                          DynamoDB (metadata)
                              ↓ 
                          Cognito (auth)
                              ↓
                          CloudFront (CDN)
```

**Core AWS Services:**
- **S3** - File storage backend
- **Lambda** - Serverless file processing 
- **API Gateway** - RESTful API endpoints
- **DynamoDB** - File metadata and user data
- **Cognito** - User authentication & authorization
- **CloudFront** - CDN for fast global delivery
- **VPC** - Secure networking layer

## Features Roadmap

### Phase 1: Core Storage (Weeks 1-3)
- [ ] User registration and authentication
- [ ] File upload/download functionality
- [ ] Basic folder structure
- [ ] Simple web interface
- [ ] File metadata storage

### Phase 2: Enhanced Features (Weeks 4-6)
- [ ] File sharing with secure links
- [ ] Image thumbnail generation
- [ ] Search functionality
- [ ] Usage analytics dashboard
- [ ] Email notifications

### Phase 3: Advanced Features (Weeks 7-10)
- [ ] File versioning
- [ ] Real-time synchronization
- [ ] Collaboration features
- [ ] Mobile app (React Native)
- [ ] Desktop sync client

## Tech Stack

**Backend:**
- AWS Lambda (Node.js/Python)
- API Gateway
- S3
- DynamoDB
- Cognito

**Frontend:**
- React.js
- AWS SDK for JavaScript
- Material-UI or Tailwind CSS

**Infrastructure:**
- Terraform/CloudFormation
- GitHub Actions (CI/CD)
- CloudWatch (monitoring)

## Getting Started

### Prerequisites
- AWS Account with appropriate permissions
- Node.js 18+ 
- Terraform (for infrastructure)
- Git

### Local Development Setup
```bash
# Clone the repository
git clone https://github.com/5H4D0W86/personal-cloud-storage
cd personal-cloud-storage

# Install dependencies
npm install

# Set up AWS credentials
aws configure

# Deploy infrastructure
cd infrastructure
terraform init
terraform plan
terraform apply

# Start development server
npm run dev
```

## Project Structure
```
├── frontend/          # React web application
├── backend/           # Lambda functions
├── infrastructure/    # Terraform configurations
├── docs/             # Documentation
└── tests/            # Test suites
```

## Cost Estimation
- **Development**: Free tier eligible
- **Light usage** (50GB): ~$5-10/month
- **Medium usage** (500GB): ~$15-25/month

## Security Features
- End-to-end encryption
- IAM role-based access control
- Secure file sharing with expiration
- Audit logging

## Contributing
This is a personal learning project, but feedback and suggestions are welcome!

## License
MIT License

---
*Built as part of cloud engineering learning journey*
