pipeline {
  agent any
 
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    IMAGE = 'iamwaseem9746/cloudshop-app'
  }
 
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/Waseem-Ansari/Cloudshop-devops-pipeline.git'
      }
    }
 
    stage('Build Docker Image') {
      steps {
        script {
            docker.build("${IMAGE}:${BUILD_NUMBER}")
        }
      }
    }
 
    stage('Push to DockerHub') {
      steps {
        script {
            docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                docker.image("${IMAGE}:${BUILD_NUMBER}").push()
          }
        }
      }
    }
    stage ('Deploy to kubernetes'){
      steps{
        script {
          sh '''
              ssh -o StrictHostKeyChecking=no -i /tmp/jenkins.pem  ubuntu@13.222.252.193
              ' helm upgrade --install cloudshop /home/ubuntu/myapp \
              --set image.repository=iamwaseem9746/cloudshop-app \
              --set image.tag='${BUILD_NUMBER}' \
              --insecure-skip-tls-verify \
              --debug'
              '''
        }
      }
    }   
  }
}
