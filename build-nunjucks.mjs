import nunjucks from "nunjucks";
import fs from "fs";
import path from "path";
import chokidar from "chokidar";

const srcDir = "./pages";

function compile(outputDir) {
  nunjucks.configure(srcDir, { autoescape: true });

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith(".njk"));

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  files.forEach(file => {
    if (file === "layout.njk") return;

    const html = nunjucks.render(file);
    const output = path.join(outputDir, file.replace(".njk", ".html"));
    fs.writeFileSync(output, html);

    console.log("Compiled:", output);
  });
}


if (process.argv.includes("--watch")) {
  compile(".");
  chokidar.watch(srcDir).on("change", () => {
    console.log("Rebuilding...");
    compile(".");
  });
} else {

  compile("./dist");
}
