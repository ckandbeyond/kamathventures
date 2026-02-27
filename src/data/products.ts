export interface Product {
  name: string
  url?: string
  description: string
  tags: string[]
  type: 'live' | 'past'
  role?: string
}

export const products: Product[] = [
  {
    name: 'WordDuel',
    url: 'https://www.wordduel.live',
    description: 'Real-time multiplayer word game. Challenge a friend to cooperative or competitive Wordle — pick words for each other or solve together.',
    tags: ['Multiplayer', 'Word Game', 'Real-time'],
    type: 'live',
  },
  {
    name: 'Daily Word Unscramble',
    url: 'https://dailywordunscramble.com',
    description: 'A fresh word puzzle every day. Unscramble jumbled letters, use hints strategically, and share your score with friends.',
    tags: ['Daily Puzzle', 'Word Game', 'Solo'],
    type: 'live',
  },
  {
    name: 'Da Vinci Kidspace',
    description: 'Led 0-to-1 product development for an edtech platform designed to spark creativity and STEM learning in kids.',
    tags: ['EdTech', '0-to-1'],
    type: 'past',
    role: 'Product Lead',
  },
  {
    name: '99math',
    description: 'Built core product experiences for a competitive math edtech platform used in classrooms worldwide.',
    tags: ['EdTech', '0-to-1'],
    type: 'past',
    role: 'Product Lead',
  },
  {
    name: 'Facebook & Messenger Games',
    description: 'Shipped game features across the Facebook and Messenger gaming platforms, reaching hundreds of millions of players.',
    tags: ['Gaming', 'Platform'],
    type: 'past',
    role: 'Product Manager',
  },
  {
    name: 'Pocket Island / Wooga',
    description: 'Early HTML5 social game development at Wooga, pioneering browser-based gaming experiences.',
    tags: ['HTML5', 'Social Gaming'],
    type: 'past',
    role: 'Game Developer',
  },
]
