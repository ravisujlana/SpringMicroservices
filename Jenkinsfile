pipeline {
  agent {
    dockerfile {
            filename 'Dockerfile.dev'
            dir 'client'
            label 'ravisujlana/multi-client'
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