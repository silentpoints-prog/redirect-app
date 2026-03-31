export default function handler(req, res) {
  const path = req.url || "";
  const target = "https://drludidi.wixsite.com/my-site-2" + path;

  res.statusCode = 302;
  res.setHeader("Location", target);
  res.end();
}
