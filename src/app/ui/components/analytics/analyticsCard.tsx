'use client'

import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface AnalyticsCardData {
    title: string;        
    value: string;        
    percentage: number;   
    isPositive: boolean;  
    description?: string; 
}

interface AnalyticsCardProps {
    data: AnalyticsCardData;
    index: number;
    selectedCard: number | null;
    onCardSelect: (index: number) => void;
}

const Icon = ({ isPositive }: { isPositive: boolean }) => {
    return isPositive ? <TrendingUpIcon sx={{ color: 'success.main', fontSize: 16 }} /> : <TrendingDownIcon sx={{ color: 'error.main', fontSize: 16 }} />;
}

export default function AnalyticsCard({ data, index, selectedCard, onCardSelect }: AnalyticsCardProps) {

    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant="caption" color="text.secondary">
                        {data.title}
                    </Typography>

                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        {data.value}
                    </Typography>

                    <Box sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        backgroundColor: 'grey.100',
                        borderRadius: 1,
                        px: 1,
                        py: 0.5
                    }}>
                        <Icon isPositive={data.isPositive} />
                        <Typography variant="caption" color={data.isPositive ? 'success.main' : 'error.main'}>
                            {data.percentage}%
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}