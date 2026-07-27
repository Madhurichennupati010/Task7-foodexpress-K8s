## ☸️ Kubernetes Commands

| Command | Purpose |
|---------|---------|
| `minikube start --driver=docker` | Starts the Minikube Kubernetes cluster. |
| `minikube status` | Checks the status of the Minikube cluster. |
| `minikube addons enable ingress` | Enables the NGINX Ingress Controller. |
| `minikube addons enable metrics-server` | Enables the Metrics Server for HPA. |
| `kubectl cluster-info` | Displays Kubernetes cluster information. |
| `kubectl get nodes` | Lists all worker nodes in the cluster. |
| `kubectl apply -f kubernetes/` | Deploys all Kubernetes resources. |
| `kubectl get pods -n foodexpress` | Lists all running pods in the `foodexpress` namespace. |
| `kubectl get deployments -n foodexpress` | Lists all deployments. |
| `kubectl get svc -n foodexpress` | Lists all services. |
| `kubectl get ingress -n foodexpress` | Displays Ingress resources. |
| `kubectl get hpa -n foodexpress` | Displays Horizontal Pod Autoscaler status. |
| `kubectl get pv` | Lists Persistent Volumes (PV). |
| `kubectl get pvc -n foodexpress` | Lists Persistent Volume Claims (PVC). |
| `kubectl top nodes` | Displays CPU and memory usage of cluster nodes. |
| `kubectl top pods -n foodexpress` | Displays CPU and memory usage of application pods. |
| `kubectl rollout restart deployment/backend -n foodexpress` | Restarts the backend deployment. |
| `kubectl rollout restart deployment/frontend -n foodexpress` | Restarts the frontend deployment. |
| `kubectl rollout status deployment/backend -n foodexpress` | Checks the backend deployment rollout status. |
| `kubectl rollout status deployment/frontend -n foodexpress` | Checks the frontend deployment rollout status. |
| `kubectl logs -f deployment/backend -n foodexpress` | Streams backend application logs. |
| `kubectl describe pod <pod-name> -n foodexpress` | Displays detailed information about a specific pod. |
| `kubectl delete -f kubernetes/` | Deletes all deployed Kubernetes resources. |

---

## 🐳 Docker Commands

| Command | Purpose |
|---------|---------|
| `docker build -t madhu934652/food-express-backend:latest ./backend` | Builds the backend Docker image. |
| `docker build -t madhu934652/food-express-frontend:latest ./frontend` | Builds the frontend Docker image. |
| `docker images` | Lists all Docker images. |
| `docker ps` | Lists running Docker containers. |
| `docker login` | Authenticates with Docker Hub. |
| `docker push madhu934652/food-express-backend:latest` | Pushes the backend image to Docker Hub. |
| `docker push madhu934652/food-express-frontend:latest` | Pushes the frontend image to Docker Hub. |
| `docker pull madhu934652/food-express-backend:latest` | Pulls the latest backend image from Docker Hub. |
| `docker pull madhu934652/food-express-frontend:latest` | Pulls the latest frontend image from Docker Hub. |
