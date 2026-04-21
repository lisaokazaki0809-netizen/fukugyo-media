export const categories = {
  investment: { name: '投資', description: '株式・不動産・仮想通貨など、資産を増やす副業の選び方' },
  ai: { name: 'AI副業', description: 'AIツールを活用した副業の始め方と稼ぎ方' },
  entrepreneur: { name: '起業', description: 'スモールビジネスや個人事業の立ち上げガイド' },
  fortune: { name: '占い', description: '占い副業の始め方と収益化のリアル' },
  relationship: { name: '恋愛', description: '恋愛関連の副業・サービスの選び方' },
} as const;

export type CategorySlug = keyof typeof categories;

export function getCategoryName(slug: string): string {
  return categories[slug as CategorySlug]?.name ?? slug;
}

export function getCategoryDescription(slug: string): string {
  return categories[slug as CategorySlug]?.description ?? '';
}
