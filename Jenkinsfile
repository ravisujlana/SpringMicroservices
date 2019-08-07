pipeline {
  agent {
    docker {
      args '-u root:sudo -p 3000:3000'
      image 'node:alpine'
    }

  }
  environment {
    PATH = "$PATH;/usr/local/bin/docker-compose;/usr/local/bin/docker"
  }
  stages {
    stage('cloning') {
      steps {
        pwd()
        sh 'docker build -t react-test -f ./client/Dockerfile.dev ./client'
      }
    }
  }
}