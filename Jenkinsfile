pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "christopherian2004/devops-backend"
        DOCKER_TAG = "v${BUILD_NUMBER}"
        FULL_IMAGE = "${DOCKER_IMAGE}:${DOCKER_TAG}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ian32-del/automated-deployment.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $FULL_IMAGE ./app/backend'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'DOCKERHUB_PASS')]) {
                    sh '''
                    echo $DOCKERHUB_PASS | docker login -u christopherian2004 --password-stdin
                    docker push $FULL_IMAGE
                    '''
                }
            }
        }

        stage('Load Image into Minikube') {
            steps {
                sh '''
                # Ensure image is available inside Minikube
                minikube image load $FULL_IMAGE
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                ansible-playbook -i inventory/dev.ini ansible/deploy_k8s.yml \
                -e backend_image=$FULL_IMAGE \
                -e imagePullPolicy=IfNotPresent
                '''
            }
        }
    }
}
