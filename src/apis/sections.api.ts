import type { TabItemType } from '@/types/tab.type'
import http from '@/utils/http'

export const getSections = () => http.get<TabItemType[]>('/data.json')
