const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  YesorNo = (getRandomInt(2));
  // Expected output: 0, 1 
    if(YesorNo == 1){
      res.send('Yes!')
    } else {
      res.send('No!')
    }
})

//birdfact?birdName="birdname" for result
app.get('/birdfact', (req, res) => {
  const birdFacts = {
    "chicken": "Chickens are the most populous bird in the world with an estimated population of 22.67 billion.",
    "falcon": "The peregrin falcon is the fastest living creature with top speeds of up 270 mph!",
    "penguin": "Emperor penguins can dive for 20-30 minutes at a time and can reach depths of over 1,600 feet",
    "parrot": "Some parrot species can have a lifespan of up to 80 years.",
    "pigeon": "Pigeons are one of the only birds that makes milk, its called crop milk and both male and female can produce it."
  };
  const birdName = req.query.birdName?.toLowerCase();

  if (birdName && birdFacts[birdName]) {
      res.json({ birdName, fact: birdFacts[birdName] });
  } else {
      res.status(404).json({ error: "Use this 'birdfact?birdName=birdname' for result. Try one of these birds: Chicken, Falcon, Penguin, Parrot, and Pigeon" });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})