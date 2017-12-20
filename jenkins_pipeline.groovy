node {
   stage('Preparation') {
      git 'https://github.com/psergiopoli/STGeneratorTemplate.git'
   }
   stage('Yarn Install') {
        sh "yarn install"
   }
   stage('Yarn Build') {
        sh "yarn build --prod"
   }
   stage('Remote Clean') {
        sh 'ssh -i ~/.ssh/stg root@huehuebr.tk rm -r /var/www/html/*'
   }
   stage('Remote Deploy') {
        sh 'ssh -i ~/.ssh/stg root@huehuebr.tk mkdir -p /var/www/temp_dist'
        sh "scp -i ~/.ssh/stg -r dist/* root@huehuebr.tk:/var/www/temp_dist"
        sh 'ssh -i ~/.ssh/stg root@huehuebr.tk "mv /var/www/temp_dist/* /var/www/html"'
   }
   stage('Clean Remote Deploy') {
       sh 'ssh -i ~/.ssh/stg root@huehuebr.tk rm -rf /var/www/temp_dist'
   }
}