pipeline {
  agent any
  stages {
    stage('Mensagem') {
      steps {
        echo 'Pipeline Mensagem'
      }
    }

    stage('sleep') {
      steps {
        echo 'deu certo'
        sleep 20
        build(job: 'main', propagate: true)
      }
    }

  }
}