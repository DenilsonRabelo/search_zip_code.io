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
        build(job: 'unicorn', propagate: true)
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

    stage('email') {
      steps {
        mail(body: 'codigo testado', subject: 'deucerto', to: 'rabelo.denilson.denilson@gmail.com')
      }
    }

  }
  triggers {
    pollSCM('30 15 * * *')
  }
}