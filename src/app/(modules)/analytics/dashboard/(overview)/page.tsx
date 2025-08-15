import { getAnalyticsData } from "@/app/lib/actions/analytics";
import AnalyticsGrid from "@/app/ui/components/analytics/analyticsGrid";
import PieChartDashboard from "@/app/ui/components/analytics/PieChartDashboard";
import MovementsTable from "@/app/ui/components/details/movementsTable";
import { Suspense } from "react";

export default async function Dashboard() {
    const data = await getAnalyticsData();

    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-full h-1/3">
                <AnalyticsGrid data={data} />
            </div>
            <div className="w-full h-2/3 flex">
                <div className="w-1/4 h-full flex items-center">
                    <Suspense fallback={<div>Loading...</div>}>
                        <PieChartDashboard />
                    </Suspense>
                </div>
                <div className="w-3/4 h-full">
                    <div className="w-full h-full overflow-hidden flex items-center justify-center">
                        <MovementsTable />
                    </div>
                </div>
            </div>
        </div>
    )
}