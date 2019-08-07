pipeline {
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