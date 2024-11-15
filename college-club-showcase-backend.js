const express = require('express');
const app = express();
const port = 3000;

// Sample club data
const clubs = [
  {
    name: 'Chess Club',
    description: 'Dedicated to playing and promoting the game of chess.',
    events: [
      { name: 'Chess Tournament', date: '2023-11-20' },
      { name: 'Chess Lessons', date: '2023-12-01' }
    ],
    membership: { fee: 10, requirements: ['Full-time student'] }
  },
  {
    name: 'Hiking Club',
    description: 'Organizes outdoor adventures and hiking trips.',
    events: [
      { name: 'Day Hike', date: '2023-10-15' },
      { name: 'Weekend Camping Trip', date: '2023-11-05' }
    ],
    membership: { fee: 20, requirements: ['Signed waiver'] }
  },
  {
    name: 'Photography Club',
    description: 'Explores the art of photography through workshops and outings.',
    events: [
      { name: 'Nature Photography Workshop', date: '2023-09-25' },
      { name: 'Campus Photo Walk', date: '2023-10-12' }
    ],
    membership: { fee: 15, requirements: ['DSLR camera'] }
  }
];

// Serve static files (e.g., club profiles with photos)
app.use('/static', express.static('public'));

// API endpoint to get all clubs
app.get('/api/clubs', (req, res) => {
  res.json(clubs);
});

// API endpoint to get a specific club
app.get('/api/clubs/:name', (req, res) => {
  const club = clubs.find(c => c.name === req.params.name);
  if (club) {
    res.json(club);
  } else {
    res.status(404).json({ error: 'Club not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
