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
      }
    }

    stage('Deploy') {
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
        mail(body: 'codigo testado', subject: 'deucerto', to: 'rabelo.denilson.denilson@gmail.com', from: 'rabelo.denilson.denilson@gmail.com')
      }
    }

  }
  triggers {
    pollSCM('30 15 * * *')
  }
}