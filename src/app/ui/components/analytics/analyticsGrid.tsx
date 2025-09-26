'use client'

import { Box, Grid } from "@mui/material"
import AnalyticsCard from "./analyticsCard"
import { useState } from "react";

export default function AnalyticsGrid({ data }: { data: AnalyticsCardData[] }) {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ margin: '0px 20px' }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}>
                {data.map((card, index) => (
                    <Grid
                        key={index}
                        size={{
                            xs: 2,
                            sm: 4,
                            md: 4,
                            lg: index < 3 ? 4 : 3,
                            xl: index < 3 ? 4 : 3,
                        }}>
                        <AnalyticsCard
                            data={card}
                            index={index}
                            selectedCard={selectedCard}
                            onCardSelect={setSelectedCard}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}