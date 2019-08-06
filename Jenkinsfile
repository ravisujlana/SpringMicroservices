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
        node(label: 'docker') {
          sh '''def app

stage(\'Clone repository\') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

stage(\'Build image\') {
        /* This builds the actual image */

        app = docker.build("ravisujlana/multi-client")
    }'''
        }

      }
    }
  }
}