var ts = require("torrent-scraper");

console.log(ts.scrapers);

exports.movies = async (req, res) => {
  console.log("HELLO");
  const TorrentSearchApi = await require("torrent-search-api");

  await TorrentSearchApi.enablePublicProviders();

  // Search '1080' in 'Movies' category and limit to 20 results
  let torrents = await TorrentSearchApi.search(req.query.Search, "Movies");
  torrents = await torrents.filter(torrent => torrent.hasOwnProperty("magnet")).sort((a, b) => b.seeds + b.peers - (a.seeds + a.peers));
  res.json(torrents);
};
