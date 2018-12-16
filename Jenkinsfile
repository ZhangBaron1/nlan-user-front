pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'echo test'
            }
        }
        stage('Build') {
			when { 
				anyOf {
					branch 'master'
				} 
			}
            steps {
                sh 'echo build'
				sh 'docker image pull mynet1314/base_nlan_user_front'
				sh "docker build https://github.com/mynet1314/nlan-user-front.git -t nlan-user-front"
				sh "docker image tag nlan-user-front mynet1314/nlan-user-front"
            }
        }
        stage('Deploy') { 
        	when {
        	    anyOf {
        	        branch 'master'
        	    }
        	}
            steps {
                sh 'cd ~/nlan && docker-compose down && docker-compose up -d' 
				sh 'docker container prune -f'
				sh 'docker image prune -f'
            }
            post {
                success {
                	sh "echo deploy"
                }
            }
        }
    }
}
