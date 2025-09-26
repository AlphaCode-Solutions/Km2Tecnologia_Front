import MovementsTable from "@/app/ui/components/details/movementsTable";
import NewMovement from "@/app/ui/shared/buttons/addMovement";

export default function Details() {
    return (
        <div
            className="w-full h-full flex flex-col items-center justify-center"
        >
            <NewMovement />

            <MovementsTable />
        </div>
    )
}   