"use client"

import * as React from 'react';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import { movements } from '@/app/lib/movements';
import { groupByRegisterType } from '@/app/lib/hooks/groupByRegisterType';

export default function PieChartDashboard() {
    const data = groupByRegisterType(movements);
    const total = Number(data.reduce((sum: number, amount: any) => sum + amount.value, 0));

    return (
        <PieChart
            series={[
                {
                    arcLabel: (item) => `${((item.value / total) * 100).toFixed(1)}%`,
                    arcLabelMinAngle: 25,
                    arcLabelRadius: '50%',
                    data: data,
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -20, color: 'gray' },
                    valueFormatter: (item: any) => `$${item.value.toLocaleString()}`,
                },  
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fontWeight: 'bold',
                },
            }}
            height={300}
            width={300}
            slotProps={{
                legend: {
                    position: { vertical: 'bottom', horizontal: 'center' },
                    direction: 'row',
                    padding: { top: 20 },
                },
            }}
        />
    );
}