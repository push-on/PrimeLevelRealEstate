export type BlogCategory = 'Market' | 'Buying' | 'Selling' | 'Investment' | 'Guides' | 'News'

export interface BlogPost {
	id: string
	title: string
	excerpt: string
	content: string
	category: BlogCategory
	author: string
	date: string // ISO
	image?: string
	tags?: string[]
}

export const blogCategories: BlogCategory[] = ['Market', 'Buying', 'Selling', 'Investment', 'Guides', 'News']

export const blogPosts: BlogPost[] = [

	{
		id: 'staging-tips-small-budget',
		title: '5 Quick Staging Tips on a Small Budget',
		excerpt: 'Simple, low-cost tweaks that make listings feel brighter and more inviting.',
		content: 'See src/content/blogs/placeholder-1.md',
		category: 'Selling',
		author: 'Prime Level Team',
		date: '2025-02-01',
		tags: ['staging', 'budget']
	},
	{
		id: 'mortgage-prep-checklist',
		title: 'Mortgage Prep Checklist for First-Time Buyers',
		excerpt: 'A 60-minute checklist to get mortgage-ready without the stress.',
		content: 'See src/content/blogs/placeholder-2.md',
		category: 'Buying',
		author: 'Prime Level Team',
		date: '2025-01-20',
		tags: ['mortgage', 'checklist']
	},
	{
		id: 'open-house-success',
		title: 'Hosting a Successful Open House',
		excerpt: 'Small touches that encourage longer visits and stronger offers.',
		content: 'See src/content/blogs/placeholder-3.md',
		category: 'Selling',
		author: 'Prime Level Team',
		date: '2025-01-10',
		tags: ['open-house', 'tips']
	},
	{
		id: 'condo-vs-townhome',
		title: 'Condo vs. Townhome: Which Fits Your Lifestyle?',
		excerpt: 'Compare maintenance, amenities, fees, and resale to choose confidently.',
		content: 'See src/content/blogs/placeholder-4.md',
		category: 'Guides',
		author: 'Prime Level Team',
		date: '2024-12-28',
		tags: ['condo', 'townhome']
	},
	{
		id: 'investment-terms-101',
		title: 'Investment Terms 101: Cap Rate, Cash Flow, NOI',
		excerpt: 'A quick primer on the most common investment metrics.',
		content: 'See src/content/blogs/placeholder-5.md',
		category: 'Investment',
		author: 'Prime Level Team',
		date: '2024-12-12',
		tags: ['investment', 'basics']
	},
	{
		id: 'winter-maintenance-list',
		title: 'Winter Home Maintenance List',
		excerpt: 'Prevent costly repairs with these quick seasonal checks.',
		content: 'See src/content/blogs/placeholder-6.md',
		category: 'News',
		author: 'Prime Level Team',
		date: '2024-12-01',
		tags: ['maintenance', 'seasonal']
	}
]

export function getRecentPosts(limit = 3): BlogPost[] {
	return [...blogPosts]
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, limit)
}


