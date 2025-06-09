pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Prakashchawda580/ci-cd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("https://github.com/Prakashchawda580/ci-cd.git
                    // ")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    dockerImage.run("-d -p 3000:3000")
                }
            }
        }
    }
}
