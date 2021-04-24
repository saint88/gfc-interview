#!/bin/bash

TESTS_CYPRESS_RESULT=0

cd /docker_bin || exit 1

ln -sf /tmp/node_modules ./node_modules

cypress run --headless --browser chrome || TESTS_CYPRESS_RESULT=$?

if [ ${TESTS_CYPRESS_RESULT} -ne 0 ]; then
  echo "В cypress тестах произошла ошибка"
fi

exit ${TESTS_CYPRESS_RESULT}