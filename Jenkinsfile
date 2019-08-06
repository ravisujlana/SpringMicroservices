pipeline {
  agent any
  stages {
    stage('cloning') {
      steps {
        pwd()
      }
    }
  }
  environment {
    registry = 'ravisujlana/multi-kubernetes'
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
}