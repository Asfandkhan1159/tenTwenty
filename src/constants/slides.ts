export interface Slide {
  id: number
  bg: string
  thumb: string
  label: string
  titleLines: string[]
  clientName: string
  clientLocation: string
}

export const SLIDES: Slide[] = [
  {
    id: 1,
    bg: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=85&auto=format&fit=crop',
    thumb: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80&auto=format&fit=crop',
    label: 'Welcome To TenTwenty Farms',
    titleLines: ['From Our Farms', 'To Your Hands'],
    clientName: 'Client 1',
    clientLocation: 'Dubai, United Arab Emirates',
  },
  {
    id: 2,
    bg: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=85&auto=format&fit=crop',
    thumb: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=80&auto=format&fit=crop',
    label: 'Welcome To TenTwenty Farms',
    titleLines: ['Fresh From', "Nature's Best"],
    clientName: 'Client 2',
    clientLocation: 'Abu Dhabi, United Arab Emirates',
  },
  {
    id: 3,
    bg: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=85&auto=format&fit=crop',
    thumb: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&q=80&auto=format&fit=crop',
    label: 'Welcome To TenTwenty Farms',
    titleLines: ['Grown With', 'Care & Passion'],
    clientName: 'Client 3',
    clientLocation: 'Sharjah, United Arab Emirates',
  },
  {
    id: 4,
    bg: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1920&q=85&auto=format&fit=crop',
    thumb: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80&auto=format&fit=crop',
    label: 'Welcome To TenTwenty Farms',
    titleLines: ['Harvested', 'For You'],
    clientName: 'Client 4',
    clientLocation: 'Ajman, United Arab Emirates',
  },
]

export const AUTOPLAY_DURATION = 5000

export const CAROUSEL_ITEMS = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=85&auto=format&fit=crop',
    name: 'Client 1',
    location: 'Dubai, United Arab Emirates',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop',
    name: 'Client 2',
    location: 'Abu Dhabi, United Arab Emirates',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=85&auto=format&fit=crop',
    name: 'Client 3',
    location: 'Sharjah, United Arab Emirates',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=85&auto=format&fit=crop',
    name: 'Client 4',
    location: 'Ajman, United Arab Emirates',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=85&auto=format&fit=crop',
    name: 'Client 5',
    location: 'Ras Al Khaimah, United Arab Emirates',
  },
]