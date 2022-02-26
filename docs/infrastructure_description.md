## Infrastructure Description

See the architecture diagram `Architecture Diagram.drawio.png` in the docs folder.

1. The user on accessing the hosted site link goes to amazon s3. (see `7 s3.png`)
2. the frontend communicates with backend hosetd on amazon elastic beanstalk (see `5 elasticbeanstalk.png`).
3. elastic beanstalk communicates with RDS database (see `6 rds.png`) for storing and retrieving relevant information and with an S3 bucket for storing and retrieving images. 
4. For CI/CD pipeline CircleCI is used. Each time a new change is made in github, circleCI builds and deploys the application. (see the screenshots `1 circleci dashboard` , `finalbuild ` 1, 2 and 3 )