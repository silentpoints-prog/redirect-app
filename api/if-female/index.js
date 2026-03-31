export default function handler(req, res) {
  const target = "https://drludidi.wixsite.com/my-site-2";

  res.statusCode = 302;
  res.setHeader("Location", target);
  res.end();
}
