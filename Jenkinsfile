pipeline {
    agent any

    stages {
        stage('Instalacja zależności') {
            steps {
                script {
                    // Instalacja zależności
                    sh 'npm install'
                }
            }
        }

        stage('Sprawdzenie formatowania kodu') {
            steps {
                script {
                    // Uruchomienie skryptu do sprawdzania formatowania kodu
                    sh 'node prettier-diff-checker.js messy_code.js'
                }
            }
        }

        stage('Uruchomienie testów') {
            steps {
                script {
                    // Uruchamianie testów
                    sh 'npm test'
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