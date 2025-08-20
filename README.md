# automated-deployment

🚀 Automated Deployment with Ansible, Docker & Kubernetes
📌 Project Overview

This project demonstrates a complete DevOps automation workflow using:

- Ansible → configuration management & orchestration

- Docker → application containerization

- Kubernetes → deployment, scaling, & service management

- Jenkins (CI/CD) → automated builds & deployments (extension in progress)

We automated the deployment of a Node.js + MongoDB full-stack application, starting from local Docker containers and progressing to Kubernetes deployment — all managed with Ansible playbooks and extended towards CI/CD with Jenkins pipelines.

🛠️ Tech stack

- Ansible → Provisioning, orchestration, Kubernetes automation

- Docker → Containerization of backend & database

- Kubernetes → Deployment & service orchestration

- Node.js (Express) → Backend app

- MongoDB → NoSQL database

- Jenkins → (Step 6+) CI/CD pipeline for automated builds & Docker image pushes


⚙️ Project Workflow

Step 1 – Ansible Setup

- Configured Ansible with a local inventory (inventory/dev.ini).

- Created setup.yml playbook to install essential packages.

Step 2 – Install Docker with Ansible

- Automated installation of Docker CE via install_docker.yml.

- Ensured Docker starts on boot.

Step 3 – Build & Containerize the App

- Implemented Node.js backend (app/backend/server.js) connected to MongoDB.

- Dockerized backend + MongoDB with Dockerfile and docker-compose.yml.

- Verified locally:

                    curl http://localhost:3000

Step 4 – Automate Docker Deployment with Ansible

- Wrote deploy_app.yml to:

    - Build Docker image of backend

    - Start backend & MongoDB containers automatically

- Eliminated manual docker run/docker-compose.

Step 5 – Deploy to Kubernetes with Ansible

- Created Kubernetes manifests:

    - k8s/mongo-deployment.yml

    - k8s/backend-deployment.yml

- Pushed backend images to Docker Hub.

- Automated deployment with deploy_k8s.yml using kubernetes.core.k8s.

- Exposed backend service at NodePort 30081:

                            http://localhost:30081
                            
        Response : 

                            Hello from DevOps Project 🚀

Step 6 – CI/CD with Jenkins (in progress)

- Installed Docker Pipeline plugin (modern approach).

- Configured Jenkinsfile to:

    - Clone repo from GitHub

    - Build & tag Docker images (christopherian2004/devops-backend)

    - Push to Docker Hub

- Running builds inside docker-in-docker agent with socket binding.

📂 Project Structure

automated-deployment/
│── ansible/                
│   ├── setup.yml
│   ├── install_docker.yml
│   ├── deploy_app.yml
│   └── deploy_k8s.yml
│
│── inventory/              
│   └── dev.ini
│
│── app/                    
│   └── backend/
│       ├── server.js
│       ├── package.json
│       └── Dockerfile
│
│── k8s/                    
│   ├── mongo-deployment.yml
│   └── backend-deployment.yml
│
│── monitoring/             # (Step 7) Prometheus + Grafana setup (planned)
│
└── README.md               


🚀 How to Run

1. Clone the Repository

    git clone https://github.com/<your-username>/automated-deployment.git

    cd automated-deployment

2. Run Initial Setup

    ansible-playbook -i inventory/dev.ini ansible/setup.yml

3. Install Docker

    ansible-playbook -i inventory/dev.ini ansible/install_docker.yml

4. Deploy App with Docker

    ansible-playbook -i inventory/dev.ini ansible/deploy_app.yml


    - Test:

            curl http://localhost:3000

5. Deploy App to Kubernetes

    ansible-playbook -i inventory/dev.ini ansible/deploy_k8s.yml
    kubectl get pods
    kubectl get svc backend


    Access in browser:

            http://localhost:30081

6. CI/CD with Jenkins (Optional)

- Configure Jenkins with Docker Pipeline plugin

- Add Docker Hub credentials

- Run pipeline via Jenkinsfile


📖 Key Learnings

- Using Ansible playbooks to provision servers & automate deployments

- Containerization of services with Docker

- Kubernetes orchestration automated via Ansible modules

- Structuring a DevOps project for scalability & modularity

- Extending automation into CI/CD pipelines with Jenkins


✅ With this, you’ve built a full DevOps automation project: provisioning → containerization → Kubernetes orchestration → CI/CD foundations.

