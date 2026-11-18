export default function Icon({ d, size = 24, color = 'currentColor', width = 1.8, fill = 'none' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

export const ICONS = {
  leaf: 'M5 19c0-8 5-14 14-14 0 9-6 14-14 14zM5 19c3-5 6-8 10-10',
  search: 'M20 20l-4-4M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
  plus: 'M12 5v14M5 12h14',
  mic: 'M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3',
  star: 'M12 2l3 7 7 .3-5 4.7 1.5 7-6.5-3.5L5.5 21 7 14 2 9.3 9 9z',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  back: 'M15 5l-7 7 7 7',
  camera: 'M4 8h3l2-3h6l2 3h3v11H4zM12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5',
  pin: 'M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  vegetables: 'M12 3c3 2 5 5 5 9a5 5 0 0 1-10 0c0-4 2-7 5-9zM12 3v4',
  fruits: 'M12 7c-4-3-9 0-8 6 1 5 5 8 8 6 3 2 7-1 8-6 1-6-4-9-8-6zM12 7c0-2 1-3 3-4',
  grains: 'M12 21V8M12 8c-3 0-4-2-4-4 3 0 4 2 4 4zM12 8c3 0 4-2 4-4-3 0-4 2-4 4zM12 14c-3 0-4-2-4-4 3 0 4 2 4 4zM12 14c3 0 4-2 4-4-3 0-4 2-4 4z',
  wholesale: 'M3 8l9-5 9 5-9 5-9-5zM3 8v8l9 5 9-5V8M12 13v8',
  overview: 'M4 13h6V4H4zM14 20h6V4h-6zM4 20h6v-3H4z',
  orders: 'M6 3h12l2 5v13H4V8l2-5zM4 8h16M9 12h6',
  price: 'M20 12l-8 8-9-9V3h8l9 9zM7.5 7.5h.01',
  payments: 'M3 6h18v12H3zM3 10h18M7 15h4',
  reports: 'M5 20V10M12 20V4M19 20v-7',
}
