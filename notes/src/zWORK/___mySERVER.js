const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let d2rdNotes = [
  {
    id: 0,
    title: 'Auto service',
    rank: 2,
    body: 'Check prices for Service G at Autobahn motors, Mercedes-Benz Marin, MB Pleasanton'
  },
  {
    id: 1,
    title: 'Trickfish 4x8 bass Cabinet',
    rank: 3,
    body: 'The TF408 features impressive specifications making it a great stand-alone cabinet and an absolute game changer as a two-cabinet stack. Weight-saving measures were taken into account while not losing the main objective of a killer compact cabinet that would be at home on stages of all sizes.  |  Custom Eminence 4 x 8” ferrite speakers | HF compression driver on 80° conical horn  | 1200 watts peak handling, 600 watts RMS  |  Custom crossover with peak protection and HF Attenuation  |  2 x NL3 Combo connectors, 2 x ¼” phone jacks  | Baltic Birch  | Dado and Rabbet Joint Construction  | 8 ohms  | Freq. Resp. 40Hz - 16kHz  |  Metal handles, metal corners, rubber feet  | 16 gauge steel grille  | 22 oz. sharkskin vinyl  | H 22.0 x W 19.0 x D 15.0  | Weight: Net 56Lbs  | Made in the USA'
  },
  {
    id: 2,
    title: 'New portable upright bass?',
    rank: 1,
    body: "Eminence Bass: Finally, the Eminence Bass is the closest relative to a true upright bass to our hands and ears. It was the first EUB that really caught Bob's attention, that he wanted to continue to play and enjoy -- it has the vibe, both literally and figuratively-- the vibrations of a truly acoustic instrument against the body, and the feel of a true double bass neck. It is constructed like a full size double bass, with a bass bar and sound post. It has a nicely crafted removable wooden bout to put the bass in the perfect playing position. And while the acoustic sound is not loud enough, unamplified, to perform with, it can be practiced without an amp, as the acoustic sound is quite pleasing but won't transmitted throughout the house.  | So, each bass has its strengths, and perhaps your best option is not necessarily the most expensive, depending on what your needs are. If you have any questions not answered here, feel free to contact us with your specific questions."
  },
  {
    id: 3,
    title: 'Dealers for Ned Steinberg EUB',
    rank: 3,
    body: "A wonderfully smooth playing and sounding EUB (electric upright bass). Ned Steinberger is the master of ergonomics, as well as tonal flexibility. This NS CR4M model adds EMG magnetic pickups, for even more flexibility of tone beyond the Polar bridge pickups. A 3 position switch lets you choose the output of the two types of pickups, and you can also adjust each string's coil of the neodymium magnets for as punch as you desire, and to balance the output for your best tone. List Price: $3580 (Includes great heavy duty braced tripod stand and improved gig bag with pocket for the stand)"
  },
  {
    id: 4,
    title: 'New Storage Spaces',
    rank: 2,
    body: 'Chapman Storage, Concord.  |  Clutter.com '
  }
];

let id = d2rdNotes.length;

app.use(bodyParser.json());

app.use(cors());

app.get('/api/d2rdNotes/get', (req, res) => {
  res.send(d2rdNotes);
});

app.post('/api/d2rdNotes/create', (req, res) => {
  ++id;
  const { title, body, rank } = req.body;
  const myNote = { id, title, body, rank };
  d2rdNotes.push(myNote);
  res.send(d2rdNotes);
});

app.put('/api/d2rdNotes/update', (req, res) => {
  const { title, rank, body } = req.body;
  const updatedNote = { title, rank, body };
  const newNotes = d2rdNotes.map(note => {
    return (note = updatedNote);
  });
  d2rdNotes = newNotes;
  res.send(d2rdNotes);
});

app.delete('/api/d2rdNotes/delete', (req, res) => {
  const id = req.body.id;
  const newNotes = d2rdNotes.filter(note => {
    return id !== note.id;
  });
  d2rdNotes = newNotes;
  res.send(d2rdNotes);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
