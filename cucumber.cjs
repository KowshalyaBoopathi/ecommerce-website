const options = [
    '--require-module ts-node/register',
    '--require-module tsconfig-paths/register',
    '--require tests/support/**/*.ts',
    '--require tests/steps/**/*.ts',
    '--format progress',
    '--format cucumber-js-extent:spark.html'
].join(' ');

const features = ['tests/features/', options].join(' ');

module.exports = { default: features };