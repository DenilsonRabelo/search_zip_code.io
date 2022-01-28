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

    stage('deploy') {
      when {
        branch 'develop'
      }
      steps {
        input 'Espera pela confirmação'
        echo 'iniciando deploy'
      }
    }

  }
}