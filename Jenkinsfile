pipeline {
  agent any
  tools {
    gradle "Gradle-7"
  }
  stages {
    stage('clone repository') {
      steps {
        git 'https://github.com/chaxito/gallery.git'
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
    stage('Run test') {
      steps {
        sh 'gradle test'
      }
    }
    stage('Deploy to Heroku') {
  steps {
    withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
      sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/mighty-earth-27385.git master'
        }
      }
    } 
  }
}