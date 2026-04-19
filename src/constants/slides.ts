export interface Slide {
  id: number
  bg: string        // background image URL
  thumb: string     // thumbnail image URL (same or different crop)
  label: string
  titleLines: string[]   // split into lines for animation
  clientName: string
  clientLocation: string
}

// Replace these with your actual Figma-exported images
// Place images in /public/images/
export const SLIDES: Slide[] = [
  {
    id: 1,
    bg: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumb: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // next slide's image
    label: 'Welcome To TenTwenty Farms',
    titleLines: ['From Our Farms', 'To Your Hands'],
    clientName: 'Client 1',
    clientLocation: 'Dubai, United Arab Emirates',
  },
  {
    id: 2,
    bg: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumb: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Welcome To TenTwenty Farms',
    titleLines: ['Fresh From', 'Nature\'s Best'],
    clientName: 'Client 2',
    clientLocation: 'Abu Dhabi, United Arab Emirates',
  },
  {
    id: 3,
    bg: 'https://plus.unsplash.com/premium_photo-1674624682288-085eff4f98da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumb: 'https://plus.unsplash.com/premium_photo-1674624682288-085eff4f98da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg',
    label: 'Welcome To TenTwenty Farms',
    titleLines: ['Grown With', 'Care & Passion'],
    clientName: 'Client 3',
    clientLocation: 'Sharjah, United Arab Emirates',
  },
  {
    id: 4,
    bg: '/images/slide-4.jpg',
    thumb: '/images/slide-1.jpg',  // wraps back to slide 1
    label: 'Welcome To TenTwenty Farms',
    titleLines: ['Harvested', 'For You'],
    clientName: 'Client 4',
    clientLocation: 'Ajman, United Arab Emirates',
  },
]

export const AUTOPLAY_DURATION = 5000  // ms

export const CAROUSEL_ITEMS = [
  {
    id: 1,
    img: 'https://plus.unsplash.com/premium_photo-1674624682288-085eff4f98da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Client 1',
    location: 'Dubai, United Arab Emirates',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Client 2',
    location: 'Abu Dhabi, United Arab Emirates',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Client 3',
    location: 'Sharjah, United Arab Emirates',
  },
  {
    id: 4,
    img: '/https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Client 4',
    location: 'Ajman, United Arab Emirates',
  },
  {
    id: 5,
    img: '/images/product-5.jpg',
    name: 'Client 5',
    location: 'Ras Al Khaimah, United Arab Emirates',
  },
]
