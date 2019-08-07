pipeline {
  agent {
    dockerfile {
      args '-t react-test'
      additionalBuildArgs  '--build-arg version=1.1'
      dir 'client'
      filename 'Dockerfile.dev'
      reuseNode true
    }
  }

  stages {
    stage('test') {
      steps {
        pwd()
      }
    }
  }
}