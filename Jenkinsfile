pipeline {
  environment {
    registry = "ravisujlana/multi-kubernetes"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com:ravisujlana/multi-kubernetes.git'
      }
    }
  }
}