#!/bin/sh
set -e

echo "Pushing model to DB... "
npx prisma db push

exec npm run server