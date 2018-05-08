const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5500;
const app = express();

let notes = [
  {
    id: 0,
    title: 'Auto service',
    priority: 2,
    body: 'Check prices for Service G at Autobahn motors, Mercedes-Benz Marin, MB Pleasanton'
  },
  {
    id: 1,
    title: 'Trickfish 4x8 bass Cabinet',
    priority: 3,
    body: 'The TF408 features:  Custom Eminence 4 x 8” ferrite speakers | HF compression driver on 80° conical horn  | 1200 watts peak handling, 600 watts RMS  |  Custom crossover with peak protection and HF Attenuation  |  2 x NL3 Combo connectors, 2 x ¼” phone jacks  | Baltic Birch  | Dado and Rabbet Joint Construction  | 8 ohms  | Freq. Resp. 40Hz - 16kHz  |  Metal handles, metal corners, rubber feet  | 16 gauge steel grille  | 22 oz. sharkskin vinyl  | H 22.0 x W 19.0 x D 15.0  | Weight: Net 56Lbs  | Made in the USA'
  },
  {
    id: 2,
    title: 'New portable upright bass?',
    priority: 1,
    body: "Eminence Bass: Finally, the Eminence Bass is the closest relative to a true upright bass to our hands and ears. It was the first EUB that really caught Bob's attention..."
  },
  {
    id: 3,
    title: 'Dealers for Ned Steinberg EUB',
    priority: 3,
    body: "A wonderfully smooth playing and sounding EUB (electric upright bass). Ned Steinberger is the master of ergonomics, as well as tonal flexibility. This NS CR4M model adds EMG magnetic pickups, for even more flexibility of tone beyond the Polar bridge pickups..."
  },
  {
    id: 4,
    title: 'New Storage Spaces',
    priority: 2,
    body: 'Chapman Storage, Concord.  |  Clutter.com '
  }
];

let id = notes.length;

app.use(bodyParser.json());

app.use(cors());

app.get('/api/notes/get', (req, res) => {
  res.send(notes);
});

app.post('/api/notes/create', (req, res) => {
  ++id;
  const { title, body, priority } = req.body;
  const myNote = { id, title, body, priority };
  notes.push(myNote);
  res.send(notes);
});

app.put('/api/notes/update', (req, res) => {
  const { title, priority, body } = req.body;
  const updatedNote = { title, priority, body };
  const newNotes = notes.map(note => {
    return (note = updatedNote);
  });
  notes = newNotes;
  res.send(notes);
});

app.delete('/api/notes/delete', (req, res) => {
  const id = req.body.id;
  const newNotes = notes.filter(note => {
    return id !== note.id;
  });
  notes = newNotes;
  res.send(notes);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
