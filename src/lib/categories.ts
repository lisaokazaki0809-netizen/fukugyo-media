export const categories = {
  investment: {
    name: '投資',
    description: '株式・投資信託・仮想通貨など、資産を増やす副業の選び方',
    color: '#16A34A',
    bgColor: '#F0FDF4',
    image: '/images/categories/investment-photo.jpg',
    image2: '/images/categories/investment-photo2.jpg',
  },
  ai: {
    name: 'AI副業',
    description: 'AIツールを活用した副業の始め方と稼ぎ方',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    image: '/images/categories/ai-photo.jpg',
    image2: '/images/categories/ai-photo2.jpg',
  },
  entrepreneur: {
    name: '起業',
    description: 'スモールビジネスや個人事業の立ち上げガイド',
    color: '#CA8A04',
    bgColor: '#FEFCE8',
    image: '/images/categories/entrepreneur-photo.jpg',
    image2: '/images/categories/entrepreneur-photo2.jpg',
  },
  jobchange: {
    name: '転職',
    description: '転職活動の進め方、エージェント比較、面接対策など',
    color: '#2563EB',
    bgColor: '#EFF6FF',
    image: '/images/categories/jobchange-photo.jpg',
    image2: '/images/categories/jobchange-photo2.jpg',
  },
  career: {
    name: 'キャリアアップ',
    description: '資格取得、スキルアップ、昇進・昇給を目指す戦略',
    color: '#DC2626',
    bgColor: '#FEF2F2',
    image: '/images/categories/career-photo.jpg',
    image2: '/images/categories/career-photo2.jpg',
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

export function getCategoryImage(slug: string, variant: number = 0): string {
  const cat = categories[slug as CategorySlug];
  if (!cat) return '/images/categories/investment-photo.jpg';
  return variant % 2 === 0 ? cat.image : cat.image2;
}
