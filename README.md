🏍️ CloudShop – DevOps CI/CD Pipeline Project
 
This project demonstrates a complete CI/CD pipeline using Jenkins, Docker, Kubernetes (K3s), and Helm, deployed on AWS EC2 with automated Docker builds and Helm-based Kubernetes deployments.
 
 
---
 
🚀 Tech Stack
 
Jenkins – CI/CD automation
 
Docker – Containerization
 
DockerHub – Image registry
 
Kubernetes (K3s) – Lightweight Kubernetes
 
Helm – K8s deployment manager
 
GitHub – Source control
 
AWS EC2 – Infrastructure
 
 
 
---
 
🔄 CI/CD Pipeline Flow
 
GitHub Push → Jenkins Trigger →
Docker Image Build → DockerHub Push →
Helm Upgrade/Install → Deploy to K3s Cluster
 
✅ Workflow Steps:
 
1. Developer pushes code to GitHub
 
 
2. Jenkins pipeline gets triggered automatically
 
 
3. Docker image is built and tagged with Jenkins BUILD_NUMBER
 
 
4. Image is pushed to DockerHub
 
 
5. Helm uses updated tag to deploy or upgrade app in Kubernetes cluster
 
 
 
 
---
 
📂 Project Structure
 
cloudshop-devops/
├── myapp/              # Helm chart
│   ├── charts/
│   ├── templates/
│   └── values.yaml
├── src/                # Node.js app
│   └── server.js
├── Dockerfile
├── Jenkinsfile
└── README.md
 
 
---
 
🧪 Run Locally (for testing)
 
git clone https://github.com/yourusername/cloudshop-devops.git
cd cloudshop-devops
 
# Build Docker image
docker build -t cloudshop-app .
 
# Run app
docker run -p 3000:3000 cloudshop-app
 
 
---
 
🌐 Deployed App
 
> URL: http://<EC2-PUBLIC-IP>:<NodePort>
 
 
 
Use kubectl get svc to find the NodePort
 
App is served via containerized K8s pod using Helm release
 
 
  
---
 
📜 Author
 
Waseem Ansari
GitHub: github.com/Waseem-Ansari
 
