export default function handler(req, res) {
  const path = req.url || "";
  const target = "https://drludidi.wixsite.com/my-site-2" + path;

  res.writeHead(302, {
    Location: target,
  });
  res.end();
}
