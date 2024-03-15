
export default {
  'GET /api/upload': {
    file_id: 1,
    url: "/api/upload/post",
    status: 0
  },
  'POST /api/upload/post': (req, res) => {
    res.status(303);
    res.setHeader('Location', 'http://localhost:8000/api/upload/post/1');
    res.end();
  },
  'GET /api/upload/post/1': {
    file_id: 1,
    file_url: "https://www.wetools.com/imgplaceholder/800x240",
    status: 1
  }
};
