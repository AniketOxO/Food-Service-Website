app.get('/user', (req, res) => {
    if (req.session.user) {
      res.json({ name: req.session.user.name });
    } else {
      res.json({ name: null });
    }
  });
  