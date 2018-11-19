import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING,
  FILTER_PAINTINGS,
  SHOW_ALL_PAINTINGS } from './types'
import artworks from '../data/artworks'

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks }
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID }
}

export function deletePainting(id) {
  return { type: DELETE_PAINTING, id: id }
} 

export function filterPaintings() {
  return { type: FILTER_PAINTINGS }
} 

export function showAllPaintings() {
  return { type: SHOW_ALL_PAINTINGS }
}
