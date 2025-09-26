import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getAnalyticsData = async () => {
    const data = [
        {
            id: 1,
            title: "INGRESOS",
            value: "$5,502.45",
            percentage: 12.5,
          },
          {
            id: 2,
            title: "COSTOS",
            value: "$1,200.00",
            percentage: -5.2,
        },
        {
            id: 3,
            title: "GASTOS",
            value: "$1,200.00",
            percentage: -5.2,
        },
        {
            id: 4,
            title: "MARGEN BRUTO OPERACIONAL",
            value: "$4,302.45",
            percentage: 12.5,
        },
        {
            id: 5,
            title: "UTILIDADES",
            value: "$4,302.45",
            percentage: 12.5,
        },
        {
            id: 6,
            title: "TICKET PROMEDIO",
            value: "$4,302.45",
            percentage: 12.5,
        },
        {
            id: 7,
            title: "TRANSACCIONES",
            value: "$4,302.45",
            percentage: 12.5,
        },
    ]
    return data.map((item) => ({
        ...item,
        isPositive: item.percentage > 0
    }));
}

export { getAnalyticsData };