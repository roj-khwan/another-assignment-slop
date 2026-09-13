export type Cell = number
export type Construct = { id: string; title: string; cells: Cell[]; created_at: string; author: string; rating: number }
export const GRID_SIZE = 16
export const COLORS = [
  { name: 'red', value: '#C03A22' }, { name: 'blue', value: '#82AAC7' }, { name: 'yellow', value: '#F0BE57' }, { name: 'green', value: '#738B5D' },
  { name: 'black', value: '#252525' }, { name: 'white', value: '#FFFFFF' }, { name: 'beige', value: '#DCC9A5' }, { name: 'clear', value: 'transparent' },
]
export const demoConstructs: Construct[] = [
  { id: 'demo-1', title: 'Velum / 01', author: 'lorem.studio', cells: Array.from({ length: 256 }, (_, i) => (i % 17 === 0 || (i > 68 && i < 188 && i % 16 > 5 && i % 16 < 11) ? 1 : 7)), created_at: '2026-09-08T10:00:00Z', rating: 4.8 },
  { id: 'demo-2', title: 'Soft Signal', author: 'anonymous', cells: Array.from({ length: 256 }, (_, i) => (Math.abs(i % 16 - 7.5) + Math.abs(Math.floor(i / 16) - 7.5) < 6 ? 2 : 7)), created_at: '2026-09-07T12:00:00Z', rating: 4.4 },
  { id: 'demo-3', title: 'Common Ground', author: 'lorem.persona', cells: Array.from({ length: 256 }, (_, i) => ((i % 16 === 7 || i % 16 === 8 || Math.floor(i / 16) === 7 || Math.floor(i / 16) === 8) ? 0 : 7)), created_at: '2026-09-05T12:00:00Z', rating: 4.1 },
]