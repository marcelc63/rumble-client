let charView = {
  name: '',
  description: '',
  picture: '',
  anime: '',
  credit: {
    author: '',
    pictures: '',
    coder: ''
  }
}

let charBasic = {
  maxHp: 100,
  category: []
}

let charMeta = {
  id: '',
  status: {
    onAttack: [],
    onReceive: [],
    onSkill: [],
    onState: []
  },
  skills: []
}

let charMutable = {
  hp: 100,
  alive: true
}

let char = {
  ...charView,
  ...charBasic,
  ...charMeta,
  ...charMutable
}

export default char
