pipeline {
  agent {
    dockerfile {
      args '-t react-test'
      buildArgs '-t react-test'
      dir 'client'
      filename 'Dockerfile.dev'
      reuseNode true
    }
  }

  stages {
    stage('cloning') {
      steps {
        pwd()
      }
    }
  }
}