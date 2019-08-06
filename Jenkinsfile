pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('cloning') {
      steps {
        pwd()
        tool(name: 'docker', type: 'docker')
        sh 'docker build -t react-test -f ./client/Dockerfile.dev ./client'
      }
    }
  }
}