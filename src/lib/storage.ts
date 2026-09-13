import type { Construct } from '../types'
import { demoConstructs } from '../types'
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
const endpoint = url && key ? `${url}/rest/v1/constructs` : undefined
export async function loadConstructs(): Promise<Construct[]> {
  if (!endpoint) return demoConstructs
  try { const response = await fetch(`${endpoint}?select=*&order=created_at.desc&limit=24`, { headers: { apikey: key!, Authorization: `Bearer ${key}` } }); if (!response.ok) throw new Error('Unable to load constructs'); return await response.json() } catch { return demoConstructs }
}
export async function saveConstruct(construct: Construct): Promise<void> {
  if (!endpoint) return
  await fetch(endpoint, { method: 'POST', headers: { apikey: key!, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: JSON.stringify(construct) })
}
export function encodeCells(cells: number[]): string { let output = ''; for (let index = 0; index < cells.length; index += 8) { let word = 0; for (let offset = 0; offset < 8; offset++) word |= (cells[index + offset] ?? 7) << (offset * 3); output += word.toString(36).padStart(5, '0') } return output }