pipeline {
  agent {
    docker {
      args '-u root:sudo -p 3000:3000'
      image 'node:12-apline'
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