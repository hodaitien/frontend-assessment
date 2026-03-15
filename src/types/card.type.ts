import type { RouteLocationRaw } from 'vue-router'

export interface CardDataType {
  imageSrc: string
  imageAlt?: string
  text: string
  to?: RouteLocationRaw
}
