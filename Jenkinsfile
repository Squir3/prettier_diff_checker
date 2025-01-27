pipeline {
    agent any

    stages {
        stage('Instalacja zależności') {
            steps {
                script {
                    // Zamiast sh, użyj bat w Windows
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