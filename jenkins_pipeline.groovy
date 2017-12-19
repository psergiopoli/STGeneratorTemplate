node {
   stage('Preparation') {
      git 'https://github.com/psergiopoli/STGeneratorTemplate.git'
   }
   stage('Npm Build') {
      // Run the maven build
      if (isUnix()) {
         sh "npm install"
      } else {
         bat(/npm install/)
      }
   }
   stage('Npm angular') {
      // Run the maven build
      if (isUnix()) {
         sh "ng --build prod"
      } else {
         bat(/npm run build --prod/)
      }
   }
}