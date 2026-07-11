const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 3000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

function resolveFile(requestPath) {
  const cleanPath = decodeURIComponent(requestPath).replace(/\/+$/, "") || "/";
  const candidates = [];
  if (cleanPath === "/") {
    candidates.push("index.html");
  } else {
    const relative = cleanPath.replace(/^\/+/, "");
    candidates.push(relative);
    if (!path.extname(relative)) {
      candidates.push(relative + ".html");
      candidates.push(path.join(relative, "index.html"));
    }
  }
  candidates.push("404.html");

  for (const candidate of candidates) {
    const file = path.resolve(root, candidate);
    if (!file.startsWith(root)) continue;
    if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  }
  return path.join(root, "404.html");
}

http
  .createServer((req, res) => {
    const url = new URL(req.url || "/", "http://localhost");
    const file = resolveFile(url.pathname);
    const ext = path.extname(file);
    res.statusCode = path.basename(file) === "404.html" && url.pathname !== "/404.html" ? 404 : 200;
    res.setHeader("Content-Type", types[ext] || "application/octet-stream");
    fs.createReadStream(file).pipe(res);
  })
  .listen(port, "0.0.0.0", () => {
    console.log("Sritikuthi static site listening on " + port);
  });
