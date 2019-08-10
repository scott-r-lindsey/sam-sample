#!/bin/bash

set -o pipefail
set -e

__here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__root="$__here/../"

. $__root/config.sh

###############################################################################

cd $__root;

STAGE=qa

echo "CloudFormation packaging..."
aws cloudformation package \
    --region ${REGION} \
    --template-file sam.yml \
    --output-template-file build/${STAGE}-packaged-template.yml \
    --s3-bucket ${BUCKET} \
    --s3-prefix sam/${SERVICENAME}

echo "CloudFormation deploying..."
aws cloudformation deploy \
    --region ${REGION} \
    --template-file build/${STAGE}-packaged-template.yml \
    --stack-name ${SERVICENAME}-${STAGE} \
    --capabilities CAPABILITY_NAMED_IAM \
    --parameter-override Stage=${STAGE} \
    --parameter-override ServiceName=${SERVICENAME}

