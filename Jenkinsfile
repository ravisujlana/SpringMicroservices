pipeline {
    agent {
        docker {
            image 'node:8-alpine'
            label 'ravisujlana/multi-client'
            args  '-v /tmp:/tmp'
        }
    }
  agent {
    dockerfile {
            filename 'Dockerfile.dev'
            dir 'client'
            label 'ravisujlana/multi-client'
            additionalBuildArgs  '--build-arg version=1.0.2'
            args '-t react-test'
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