import ContentPage from '@/components/custom/ContentPage';

export default function HomePage() {
	return (
		<div className="w-full flex-1 px-4 pb-12 pt-8 sm:px-6">
			<div className="space-y-6">
				<h1 className="text-2xl font-medium text-zinc-900 sm:text-3xl">Settings</h1>
				<ContentPage />
			</div>
		</div>
	);
}
