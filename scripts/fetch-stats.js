const https = require('https');
const fs   = require('fs');
const path = require('path');

const USER = 'SeraphCloud';
const OUT_DIR = path.join(__dirname, '../public/stats');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function download(url, fileName) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(OUT_DIR, fileName));
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`));
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

(async () => {
  try {
    await download(
      `https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&theme=dracula&include_all_commits=true&count_private=true`,
      'github-stats.svg'
    );
    await download(
      `https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&langs_count=7&theme=dracula`,
      'github-top-langs.svg'
    );
    console.log('✅ SVGs baixados com sucesso');
  } catch (e) {
    console.error('❌ Erro ao baixar:', e);
    process.exit(1);
  }
})();
