pipeline {
    agent any
    environment {
        mongo_url = "mongodb+srv://sreeparna0410:sreeparnadev@cluster0.anx47aq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        JWT_SECRET = "snowy"
    }
    stages {
        stage('Stage 1: Git Clone') {
            steps {
                git branch: 'master',
                url: 'https://github.com/sree04/blog-application.git'
            }
        }
        stage('Stage 2: Remove npm proxy') {
            steps {
                sh 'npm config rm proxy'
                sh 'npm config rm http-proxy'
                sh 'npm config rm https-proxy'
            }
        }
        stage('Stage 3: Frontend  Build') {
            steps {
                dir('frontend'){
                sh "npm install"
                sh 'docker build -t frontend--image .'
            }
            }
        }
        stage("Stage 4: Backend  Build") {
            steps {
                dir('backend'){
                sh "npm install"
                sh 'docker build -t backend--image .'
            }}
        }
        stage('Stage 5: Push image to DockerHub') {
            steps {
                script {
                        sh "docker login --username sreeparna04 --password snowy6721"
                        sh 'docker tag frontend--image sreeparna04/frontend-image:latest'
                        sh 'docker push  sreeparna04/frontend-image:latest'
                        sh "docker tag backend--image sreeparna04/backend-image:latest"
                        sh "docker push sreeparna04/backend-image:latest"
                    
                }
            }
        }
        stage('Stage 6: Clean Docker Images') {
            steps {
                script {
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
                }
            }
        }
        stage('Stage 7: Ansible Deployment') {
            steps {
                script { 
                    sh 'ansible-playbook -i inventory.ini  playbook.yml'
                }
            }
        }
    }
}
//sh 'ansible-playbook -i inventory-k8 playbook-k8.yml'
//kubectl port-forward frontend-deployment-6f58d947b9-6f42d 3002:3002
//kubectl port-forward backend-deployment-5c747c4c77-dk9h2  3400:3400
// minikube startv
