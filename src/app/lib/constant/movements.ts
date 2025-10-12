export const movements = [
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 30,
        registerType: "Ingreso",
        categoryId: "6f309c2f-60f6-44a3-a5c8-3249d421b444 (Metalurgica)",
        subCategoryId: "6f309c2f-60f6-44a3-a5c8-3249d421ba22 (Clavos 9mm)",
        description: "Venta de calvos del 9mm",
        date: "2025-04-10",
        quantity: "100",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 20,
        registerType: "Costos",
        categoryId: "6f309c2f-60f6-44a3-a5c8-3249d421b444 (Metalurgica)",
        subCategoryId: "6f309c2f-60f6-44a3-a5c8-3249d421ba22 (Clavos 9mm)",
        description: "Compra de calvos del 9mm",
        date: "2025-04-10",
        quantity: "100",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 300,
        registerType: "Ingreso",
        categoryId: "6f309c2f-60f6-44a3-a5c8-3249d421b444 (Metalurgica)",
        subCategoryId: "6f309c2f-60f6-44a3-a5c8-3249d421ba22 (caños tipo C de 1/2)",
        description: "Venta de caños tipo C de 1/2",
        date: "2025-04-10",
        quantity: "50",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 100,
        registerType: "Costos",
        categoryId: "6f309c2f-60f6-44a3-a5c8-3249d421b444 (Metalurgica)",
        subCategoryId: "6f309c2f-60f6-44a3-a5c8-3249d421ba22 (caños tipo C de 1/2)",
        description: "Compra de caños tipo C de 1/2",
        date: "2025-04-10",
        quantity: "50",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 1000,
        registerType: "Gastos",
        categoryId: "6f309c2f-60f6-44a3-a5c8-3249d421b444 (Sueldos y Beneficios)",
        subCategoryId: "6f309c2f-60f6-44a3-a5c8-3249d421ba22 (sueldos empleados)",
        description: "Pago de sueldos mensual",
        date: "2025-04-10",
    },
    // Movimientos adicionales para distintos años
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 2500,
        registerType: "Ingreso",
        categoryId: "Ventas",
        subCategoryId: "Online",
        description: "Ingresos online",
        date: "2018-06-15",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 1800,
        registerType: "Ingreso",
        categoryId: "Ventas",
        subCategoryId: "Local",
        description: "Ingresos local",
        date: "2019-09-10",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 1200,
        registerType: "Gastos",
        categoryId: "Publicidad",
        subCategoryId: "Redes",
        description: "Campaña redes",
        date: "2020-03-05",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 3200,
        registerType: "Ingreso",
        categoryId: "Ventas",
        subCategoryId: "Mayorista",
        description: "Venta mayorista",
        date: "2021-11-20",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 900,
        registerType: "Costos",
        categoryId: "Logística",
        subCategoryId: "Transporte",
        description: "Envios",
        date: "2022-07-12",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 4100,
        registerType: "Ingreso",
        categoryId: "Ventas",
        subCategoryId: "Online",
        description: "Promo invierno",
        date: "2023-08-03",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 1500,
        registerType: "Gastos",
        categoryId: "Sueldos y Beneficios",
        subCategoryId: "Bonos",
        description: "Bono fin de año",
        date: "2023-12-20",
    },
    {
        companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
        amount: 200,
        registerType: "Ingreso",
        categoryId: "Ventas",
        subCategoryId: "Local",
        description: "Apertura nuevo local",
        date: "2024-04-18",
    },
    // Gastos mensuales 2024
    ...Array.from({ length: 12 }, (_, i) => {
        const month = (i + 1).toString().padStart(2, '0');
        const categories = [
            'Sueldos y Beneficios',
            'Servicios',
            'Publicidad',
            'Logística',
        ];
        const category = categories[i % categories.length];
        return {
            companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
            amount: 800 + i * 20,
            registerType: "Gastos",
            categoryId: category,
            subCategoryId: '',
            description: `Gasto mensual ${category}`,
            date: `2024-${month}-10`,
        };
    }),
    // Gastos mensuales 2025
    ...Array.from({ length: 12 }, (_, i) => {
        const month = (i + 1).toString().padStart(2, '0');
        const categories = [
            'Sueldos y Beneficios',
            'Servicios',
            'Publicidad',
            'Logística',
        ];
        const category = categories[(i + 1) % categories.length];
        return {
            companyId: "bbe9917d-bb99-4e19-b95e-1c16d1f8565d (KM2Ferreteria)",
            amount: 900 + i * 25,
            registerType: "Gastos",
            categoryId: category,
            subCategoryId: '',
            description: `Gasto mensual ${category}`,
            date: `2025-${month}-10`,
        };
    }),
]


