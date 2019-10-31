const process = require('child_process');

function generateCrx() {
  process.execSync('cd dist && npx crx pack -o ../chrome-dashboard.crx')
}

generateCrx();
