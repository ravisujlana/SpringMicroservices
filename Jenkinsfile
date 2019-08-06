pipeline {
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com:ravisujlana/multi-kubernetes.git'
        dir(path: './client') {
          sh 'docker build -t react-test -f ./client/Dockerfile.dev ./client'
        }

      }
    }
  }
  environment {
    registry = 'ravisujlana/multi-kubernetes'
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
}