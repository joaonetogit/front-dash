import Header from "@/components/custom/Header";
import Sidebar from "@/components/custom/Sidebar";
import HomePage from "@/pages/Home";

export default function Home() {
	return (
		<main className="block sm:flex">
			<Header />
			<Sidebar />
			<HomePage />
		</main>
	);
}
