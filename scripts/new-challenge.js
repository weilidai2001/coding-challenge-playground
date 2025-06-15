const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function createNewChallenge() {
  const dirName = process.argv[2];
  if (!dirName) {
    console.error('Error: Please provide a name for the new challenge directory');
    console.log('Usage: node scripts/new-challenge.js <challenge-name>');
    process.exit(1);
  }

  const targetDir = path.join('src', 'hacker-rank', 'questions-and-answers', dirName);
  const templateDir = path.join('src', 'hacker-rank', 'template');

  try {
    if (!fs.existsSync(templateDir)) {
      throw new Error(`Template directory not found at ${templateDir}`);
    }

    if (fs.existsSync(targetDir)) {
      throw new Error(`Directory ${targetDir} already exists`);
    }

    fs.mkdirSync(targetDir, { recursive: true });
    copyRecursiveSync(templateDir, targetDir);
    
    console.log(`✅ Created new challenge in ${targetDir}`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createNewChallenge();
