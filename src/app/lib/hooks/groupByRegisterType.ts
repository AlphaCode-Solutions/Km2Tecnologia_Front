export const groupByRegisterType = (movements: any) => {
    // Primero agrupar
    const grouped = movements.reduce((acc: any, movement: any) => {
        const type = movement.registerType;
        acc[type] = (acc[type] || 0) + movement.amount;
        return acc;
    }, {});

    // Luego transformar
    return Object.entries(grouped).map(([type, amount]) => ({
        id: type,
        value: Number(amount),
        label: type,
    }));
}