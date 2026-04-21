export const categories = {
  investment: {
    name: '投資',
    description: '株式・投資信託・仮想通貨など、資産を増やす副業の選び方',
    color: '#2563EB',
    bgColor: '#EFF6FF',
  },
  ai: {
    name: 'AI副業',
    description: 'AIツールを活用した副業の始め方と稼ぎ方',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
  },
  entrepreneur: {
    name: '起業',
    description: 'スモールビジネスや個人事業の立ち上げガイド',
    color: '#059669',
    bgColor: '#ECFDF5',
  },
  jobchange: {
    name: '転職',
    description: '転職活動の進め方、エージェント比較、面接対策など',
    color: '#DC2626',
    bgColor: '#FEF2F2',
  },
  career: {
    name: 'キャリアアップ',
    description: '資格取得、スキルアップ、昇進・昇給を目指す戦略',
    color: '#D97706',
    bgColor: '#FFFBEB',
  },
} as const;

export type CategorySlug = keyof typeof categories;

export function getCategoryName(slug: string): string {
  return categories[slug as CategorySlug]?.name ?? slug;
}

export function getCategoryDescription(slug: string): string {
  return categories[slug as CategorySlug]?.description ?? '';
}

export function getCategoryColor(slug: string): string {
  return categories[slug as CategorySlug]?.color ?? '#6B7280';
}

export function getCategoryBgColor(slug: string): string {
  return categories[slug as CategorySlug]?.bgColor ?? '#F9FAFB';
}
