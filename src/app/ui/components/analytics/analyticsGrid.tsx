'use client'

import { Box, Grid } from "@mui/material"
import AnalyticsCard from "./analyticsCard"
import { useState } from "react";

interface AnalyticsCardProps {
    data: AnalyticsCardData;
    index: number;
    selectedCard: number | null;
    onCardSelect: (index: number) => void;
}

export default function AnalyticsGrid({ data }) {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((card, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
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