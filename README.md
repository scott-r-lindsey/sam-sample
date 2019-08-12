# AWS SAM Sample

This is sample project which imlements a single lambda endpoint via
[AWS SAM])https://github.com/awslabs/serverless-application-model).

# Usage

To deploy the Lambda endpoint run ```./scripts/deploy_dev.sh``` or
one of the other deploy scripts.

You may run tests by running ```npm test```.  Tests by default will use [Istanbul](https://istanbul.js.org/)
to generate a coverage report in ```output/coverage/jest/```

To run the Lambda endpoint(s) locally, install the
[AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
and then run ```sam local start-api ```.
