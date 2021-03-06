// gulpプラグインを読み込みます
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインを読み込みます
const sass = require("gulp-sass");

/**
 * Sassをコンパイルするタスクです
 */
const compileSass = () =>
  // style.scssファイルを取得
  src("sass/style.scss")
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "expanded"
      })
    )
    // cssフォルダー以下に保存
    .pipe(dest("sass"));

/**
 * Sassファイルを監視し、変更があったらSassを変換します
 */
const watchSassFiles = () => watch("sass/style.scss", compileSass);

// npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
exports.default = watchSassFiles;