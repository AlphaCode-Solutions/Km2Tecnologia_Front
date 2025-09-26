import Footer from "@/app/ui/footer";
import Navbar from "@/app/ui/components/navbar/navbar";

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen">
            <div className="w-full h-1/12">
                <Navbar />
            </div>
            <div className="w-full h-10/12">
                {children}
            </div>
            <div className="w-full h-1/12">
                <Footer />
            </div>
        </div>
    )
}