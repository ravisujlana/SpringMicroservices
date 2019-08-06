pipeline {
  agent {
    docker {
      image 'node:6-apline'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('cloning') {
      steps {
        pwd()
        sh 'docker build -t react-test -f ./client/Dockerfile.dev ./client'
      }
    }
  }
  environment {
    registry = 'ravisujlana/multi-kubernetes'
    registryCredential = 'dockerhub'
  }
}