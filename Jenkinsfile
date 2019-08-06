pipeline {
  agent {
    docker {
      image 'node:apline'
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
    dockerImage = ''
  }
}