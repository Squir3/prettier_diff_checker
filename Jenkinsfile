pipeline {
    agent any

    stages {
        stage('Instalacja zależności') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Sprawdzenie formatowania kodu') {
            steps {
                script {
                    bat 'node prettier-diff-checker.js messy_code.js'
                }
            }
        }

        stage('Uruchomienie testów') {
            steps {
                script {
                    bat 'npm test'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline zakończony.'
        }
        success {
            echo 'Pipeline wykonany pomyślnie.'
        }
        failure {
            echo 'Pipeline zakończony błędem.'
        }
    }
}

