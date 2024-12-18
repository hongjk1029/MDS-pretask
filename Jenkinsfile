pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "my-node-app"
        DOCKER_TAG = "latest"
    }
    
    stages {
        stage('Checkout') {
            steps {
                
                git branch: 'main', url: 'https://github.com/hongjk1029/MDS-pretask.git'
            }
        }

        stage('Build') {
            steps {
                script {
                   
                    sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
         
                    sh 'npm install'
                    sh 'npm test' 
                }
            }
        }

        stage('Deploy') {
            steps {
                script {

                    sh 'docker run -d -p 3000:3000 $DOCKER_IMAGE:$DOCKER_TAG'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

