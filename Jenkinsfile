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
        build(job: 'unicorn-test', propagate: true)
      }
    }

    stage('deploy') {
      when {
        branch 'main'
      }
      steps {
        input 'Espera pela confirmação'
        echo 'iniciando deploy'
      }
    }

  }
  triggers {
    pollSCM('30 15 * * *')
  }
}