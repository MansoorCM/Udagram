## Pipeline Process

1. Each time a new change is made in github, circleCI performs the CI/CD operation.
2. CircleCI installs the relevant dependencies, builds the application and deploys it on aws. (see screenshots)
    - spin up environment.
    - prepare environment variables.
    - install node, npm, aws cli, eb cli.
    - install frontend and backend dependencies.
    - build frontend and backend.
    - deploy frontend and backend.