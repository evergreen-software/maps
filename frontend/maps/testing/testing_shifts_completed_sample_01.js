var testing_shifts_completed_sample_01 =
{
    name: "Shift completed Sample 01",
    dummyData: {
        symbols: [
            {
                symbolId: 1,
                        ticks: [
                    [
                        1711117441.0,
                        190.75
                    ],
                    [
                        1711117501.0,
                        190.695
                    ],
                    [
                        1711117561.0,
                        190.72
                    ],
                    [
                        1711117621.0,
                        190.91
                    ]
                ]
            },
            {
                symbolId: 17,
                ticks: [
                    [
                        1711117441.0,
                        19.75
                    ],
                    [
                        1711117501.0,
                        90.695
                    ],
                    [
                        1711117561.0,
                        10.72
                    ],
                    [
                        1711117621.0,
                        19.91
                    ]
                ]
            }
        ],
        pairs: [
            {
                fromSymbol: {
                    symbolId: 17,
                    code: "CCL",
                    profitPercent: 0.3,
                    shares: 40,
                    value: 1704.32,
                    over: "7 days",
                },
                toSymbol:{
                    symbolId: 1,
                    code: "AMD",
                    profitPercent: -1.8,
                    shares: 155,
                    value: 508.32,
                    over: "2 weeks",
                },
                move:{
                    amount: 150,
                    option: 20,
                    sellStarted: true,
                    sellCompleted: true,
                    buyStarted: true,
                    buyCompleted: true,
                }
            },
            {
                fromSymbol: {
                    symbolId: 17,
                    code: "CCL",
                    profitPercent: 0.3,
                    shares: 33.6,
                    value: 1704.32,
                    over: "7 days",
                },
                toSymbol:{
                    symbolId: 1,
                    code: "AMD",
                    profitPercent: -1.8,
                    shares: 50,
                    value: 508.32,
                    over: "2 weeks",
                },
                move:{
                    amount: 780,
                    option: 30,
                    sellStarted: false,
                    sellCompleted: false,
                    buyStarted: false,
                    buyCompleted: false,
                }
            },
        ],

}}