# 🍔 FoodExpress - End-to-End DevOps Project


-
# 📖 Project Overview

FoodExpress is a cloud-native food ordering application deployed using modern DevOps practices. This project demonstrates containerization, orchestration, scalability, and deployment automation using Docker, Kubernetes (Minikube), AWS EC2, GitHub Actions, and Docker Hub.

This project showcases an end-to-end DevOps workflow from application containerization to Kubernetes deployment with autoscaling.

---

# 🎯 Objectives

- Containerize Frontend and Backend using Docker
- Push Docker Images to Docker Hub
- Deploy Application on Kubernetes
- Deploy MySQL using Persistent Storage
- Secure sensitive information using Kubernetes Secrets
- Manage configuration using ConfigMaps
- Implement Horizontal Pod Autoscaler
- Expose application using Kubernetes Services
- Deploy on AWS EC2 using Minikube
- Automate deployment using GitHub Actions

---

# 🏗️ Project Architecture

```
                    User
                      │
                      ▼
             Frontend Service
                      │
                      ▼
            Backend Service (API)
                      │
                      ▼
               MySQL Database
                      │
        Persistent Volume (PV)
                      │
Persistent Volume Claim (PVC)

        Kubernetes Cluster
             (Minikube)

Hosted on AWS EC2
```

---

# 🛠️ Technology Stack

| Technology | Purpose |
|------------|----------|
| AWS EC2 | Cloud Infrastructure |
| Ubuntu | Operating System |
| Docker | Containerization |
| Docker Hub | Image Registry |
| Kubernetes | Container Orchestration |
| Minikube | Local Kubernetes Cluster |
| GitHub Actions | CI/CD Pipeline |
| Node.js | Backend |
| React | Frontend |
| MySQL | Database |

---

# 📂 Project Structure

```
FoodExpress
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── Dockerfile
│   └── React Application
│
├── kubernetes/
│   ├── namespace.yaml
│   ├── config.yaml
│   ├── secret.yaml
│   ├── mysql-secret.yaml
│   ├── mysql-pv.yaml
│   ├── mysql-pvc.yaml
│   ├── mysql-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── ingress.yaml
│   └── hpa.yaml
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

# ⚙️ Prerequisites

Install the following:

- Git
- Docker
- kubectl
- Minikube
- AWS EC2 Ubuntu Server
- Docker Hub Account

---

# 🚀 Step 1 - Launch AWS EC2

Create an Ubuntu EC2 instance.

Recommended:

- Ubuntu 22.04
- t3.medium
- 30 GB Storage

Open Security Group ports:

| Port | Purpose |
|-------|----------|
|22|SSH|
|80|HTTP|
|443|HTTPS|
|30000-32767|NodePort|

SSH into EC2

```bash
ssh -i key.pem ubuntu@<EC2-PUBLIC-IP>
```

---

# 🚀 Step 2 - Install Docker

```bash
sudo apt update

sudo apt install docker.io -y

sudo systemctl enable docker

sudo systemctl start docker

sudo usermod -aG docker ubuntu

newgrp docker
```

Verify

```bash
docker --version
```

---

# 🚀 Step 3 - Install kubectl

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

chmod +x kubectl

sudo mv kubectl /usr/local/bin/
```

Verify

```bash
kubectl version --client
```

---

# 🚀 Step 4 - Install Minikube

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

Verify

```bash
minikube version
```

---

# 🚀 Step 5 - Start Minikube

```bash
minikube start --driver=docker
```

Verify

```bash
kubectl get nodes
```

Expected

```
Ready
```

---

# 🚀 Step 6 - Clone Repository

```bash
git clone https://github.com/Madhurichennupati010/Task7-foodexpress-K8s.git

cd Task7-foodexpress-K8s
```

---

# 🚀 Step 7 - Build Docker Images

Backend

```bash
docker build -t madhu934652/food-express-backend:v1 ./backend
```

Frontend

```bash
docker build -t madhu934652/food-express-frontend:v1 ./frontend
```

---

# 🚀 Step 8 - Push Images

```bash
docker login
```

```bash
docker push madhu934652/food-express-backend:v1

docker push madhu934652/food-express-frontend:v1
```

---

# 🚀 Step 9 - Enable Ingress

```bash
minikube addons enable ingress
```

Verify

```bash
kubectl get pods -n ingress-nginx
```

---

# 🚀 Step 10 - Deploy Kubernetes Resources

Go to Kubernetes folder

```bash
cd kubernetes
```

Apply everything

```bash
kubectl apply -f .
```

---

# 🚀 Step 11 - Verify Namespace

```bash
kubectl get ns
```

---

# 🚀 Step 12 - Verify Pods

```bash
kubectl get pods -n foodexpress
```

---

# 🚀 Step 13 - Verify Deployments

```bash
kubectl get deployments -n foodexpress
```

---

# 🚀 Step 14 - Verify Services

```bash
kubectl get svc -n foodexpress
```

---

# 🚀 Step 15 - Verify Secrets

```bash
kubectl get secrets -n foodexpress
```

---

# 🚀 Step 16 - Verify ConfigMap

```bash
kubectl get configmap -n foodexpress
```

---

# 🚀 Step 17 - Verify Ingress

```bash
kubectl get ingress -n foodexpress
```

---

# 🚀 Step 18 - Verify HPA

```bash
kubectl get hpa -n foodexpress
```

---

# 🚀 Step 19 - Check Logs

Backend

```bash
kubectl logs deployment/backend -n foodexpress
```

Frontend

```bash
kubectl logs deployment/frontend -n foodexpress
```

MySQL

```bash
kubectl logs deployment/mysql -n foodexpress
```

---

# 🚀 Step 20 - Open Application

Get Minikube IP

```bash
minikube ip
```

Example

```
192.168.49.2
```

Open

```
http://192.168.49.2
```

If using hostname

Edit hosts file

```
192.168.49.2 foodexpress.local
```

Then

```
http://foodexpress.local
```

---

# 📈 Horizontal Pod Autoscaler

Generate load

```bash
kubectl run load-generator \
--rm -it \
--image=busybox \
--restart=Never \
-- /bin/sh
```

Inside pod

```bash
while true;
do
wget -q -O- http://frontend-service;
done
```

Check

```bash
kubectl get hpa -w -n foodexpress
```

Watch Pods

```bash
kubectl get pods -w -n foodexpress
```

---

# 🧹 Cleanup

Delete everything

```bash
kubectl delete -f .
```

Delete Minikube

```bash
minikube delete
```

---

# 🔍 Troubleshooting

## Pod Crash

```bash
kubectl describe pod POD_NAME -n foodexpress
```

---

## Check Events

```bash
kubectl get events -n foodexpress
```

---

## View Logs

```bash
kubectl logs POD_NAME -n foodexpress
```

---

## Restart Deployment

```bash
kubectl rollout restart deployment frontend -n foodexpress

kubectl rollout restart deployment backend -n foodexpress
```

---

# 📸 Screenshots

Add screenshots for:

- EC2 Instance
- Docker Images
- Docker Hub Repository
- Minikube Running
- Pods
- Deployments
- Services
- Ingress
- HPA
- Browser Output

---

# 👩‍💻 Author

**Madhuri Chennupati**

AWS | Docker | Kubernetes | Jenkins | Terraform | Linux | DevOps Engineer

GitHub:

https://github.com/Madhurichennupati010

This project is licensed under the MIT License.
