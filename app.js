var SeanBean = function(path, character, movie, death) {
  this.path = path;
  this.character = character;
  this.movie = movie;
  this.death = death;
  this.write = function() {
    var msg = '<img src="' + this.path + '" width="250" />'
    + '<h2>' + this.character + '</h2><h3>in <i>' + this.movie + '</i></h3>'
    + '<p>' + this.death + '</p>';
    return msg;
  };
}

var listSeanBean = [
  new SeanBean('img/got.jpg', 'Ned Stark', 'Game of Thrones (2011)', 'Beheaded'),
  new SeanBean('img/black-death.jpg', 'Ulric', 'Black Death (2010)', 'Quatered by horses while suffering from the plague'),
  new SeanBean('img/far-north.jpg', 'Loki', 'Far North (2007)', 'Frozen to death while naked'),
  new SeanBean('img/the-island.jpg', 'Dr. Merrick', 'The Island (2005)', 'Shot through the neck with a grappling hook and hung'),
  new SeanBean('img/henry-viii.jpg', 'Robert Aske', 'Henry VIII (2003)', 'Hung by chains'),
  new SeanBean('img/dont-say.jpg', 'Patrick Koster', 'Don\'t Say a Word (2001)', 'Buried alive'),
  new SeanBean('img/lotr.jpg', 'Boromir', 'The Lord of the Rings: Fellowship of the Ring (2001)', 'Shot with arrows (in slow motion)'),
  new SeanBean('img/goldeneye.jpg', 'Alec Trevelyan', 'GoldenEye (1995)', 'Crushed to death by a burning antenna'),
  new SeanBean('img/scarlett.jpg', 'Lord Richard Fenton', 'Scarlett (1994)', 'Stabbed to death'),
  new SeanBean('img/patriot-games.jpg', 'Sean Miller', 'Patriot Games (1992)', 'Impaled on a boat anchor and blown up'),
  new SeanBean('img/clarissa.jpg', 'Lovelace', 'Clarissa (1991)', 'Stabbed with a rapier'),
  new SeanBean('img/tell-me.jpg', 'Gabriel Lewis', 'Tell Me that You Love Me (1991)', 'Self-inflicted stabbing'),
  new SeanBean('img/the-field.jpg', 'Tadgh McCabe', 'The Field (1990)', 'Chased off a cliff by a herd of cows'),
  new SeanBean('img/lorna-doone.jpg', 'Carver Doone', 'Lorna Doone (1990)', 'Drowned in a mire'),
  new SeanBean('img/war-requiem.jpg', 'German Soldier', 'War Requiem (1989)', 'Shot in the hand and boyonetted'),
  new SeanBean('img/caravaggio.jpg', 'Ranuccio', 'Caravaggio (1986)', 'Throat sliced open')];


var choiceLeft = document.getElementById('choice-left');
var choiceRight = document.getElementById('choice-right');
var chart = document.getElementById('chart');

var tracker = {
  tally: Array(listSeanBean.length).fill(0),
  genRandChoice: function() {
    return Math.floor(Math.random() * listSeanBean.length);
  }
};

tracker.randChoice = function() {
  var index1 = this.genRandChoice();
  var index2 = this.genRandChoice();
  while (index1 === index2) {
    index2 = this.genRandChoice();
  }
  return [index1, index2];
}

tracker.addTally = function(index) {
  this.tally[index]++; 
  console.log(this.tally);
}

// to replace: charting results
tracker.plot = function() {
  var msg = '';
  for (var i = 0; i < listSeanBean.length; i++) {
    msg += 'Tally of index ' + i + ': ' + this.tally[i] + '<br />';
  }
  chart.innerHTML = msg;
}

tracker.newPair = function() {
  tracker.randChoicePair = tracker.randChoice();   // new random pair of indice
  // show pair in HTML
  choiceLeft.innerHTML = listSeanBean[this.randChoicePair[0]].write();
  choiceRight.innerHTML = listSeanBean[this.randChoicePair[1]].write();
  console.log(this.randChoicePair);
  
  // to replace: charting results
  this.plot();
};
tracker.newPair();

// event listener
choiceLeft.addEventListener('click', function() {tracker.addTally(tracker.randChoicePair[0]); tracker.newPair();});
choiceRight.addEventListener('click', function() {tracker.addTally(tracker.randChoicePair[1]); tracker.newPair();});
