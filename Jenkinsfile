pipeline {
    agent any    
    environment {

        EMAIL_BODY = 

        """

            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>

            <p>

            View console output at 

            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"

            </p> 

            <p><i>(Build log is attached.)</i></p>

        """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_RECEPIENT = 'georgesm0101@gmail.com'

    }
  tools {
    gradle "Gradle-7"
  }
  stages {
    stage('clone repository') {
      steps {
        git 'https://github.com/Mashmighty/gallery-IP.git'
      }
    }
    stage('Build init') {
      steps {
        sh 'gradle init'
      }
    }
    stage('Build project') {
      steps {
        sh 'gradle build'
      }
    }
    // stage('Run test') {
    //   steps {
    //     sh 'gradle test'
    //   }
    // }
    stage('Deploy to Heroku') {
      steps {
    withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
      sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/ip1gallery.git master'
        }
      }
    } 
  }
      post {
        success {
            emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_SUCCESS,

                to: EMAIL_RECEPIENT
        }

        failure {
            emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_FAILURE, 

                to: EMAIL_RECEPIENT
        }
    }
}