import Mock from 'mockjs'

export default {
    getHomeData: () => {
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: 'SpringBoot',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Vue',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: '小程序',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Java',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'ES6',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'React',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }
                ],
                tableData: [
                    {
                        name: 'SpringBoot',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(2000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: 'Vue',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(2000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: '小程序',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(2000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: 'Java',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(2000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: 'ES6',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(2000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: 'React',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(2000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    }
                ],
                orderData: {
                    data: [
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            vue: Mock.Random.float(1000, 10000, 0, 2),
                            react: Mock.Random.float(1000, 10000, 0, 2),
                            es6: Mock.Random.float(1000, 10000, 0, 2),
                            echart: Mock.Random.float(1000, 10000, 0, 2),
                            axios: Mock.Random.float(1000, 10000, 0, 2),
                        }
                    ],
                    date: ["20191001", "20191002", "20191003", "20191004", "20191005", "20191006", "20191007" ]
                },
                userData: {
                    data: [
                        {
                            '活跃用户': Mock.Random.integer(0, 1000),
                            '新增用户': Mock.Random.integer(0, 200)
                        },
                        {
                            '活跃用户': Mock.Random.integer(0, 1000),
                            '新增用户': Mock.Random.integer(0, 200)
                        },
                        {
                            '活跃用户': Mock.Random.integer(0, 1000),
                            '新增用户': Mock.Random.integer(0, 200)
                        },
                        {
                            '活跃用户': Mock.Random.integer(0, 1000),
                            '新增用户': Mock.Random.integer(0, 200)
                        },
                        {
                            '活跃用户': Mock.Random.integer(0, 1000),
                            '新增用户': Mock.Random.integer(0, 200)
                        },
                        {
                            '活跃用户': Mock.Random.integer(0, 1000),
                            '新增用户': Mock.Random.integer(0, 200)
                        },
                        {
                            '活跃用户': Mock.Random.integer(0, 1000),
                            '新增用户': Mock.Random.integer(0, 200)
                        }
                    ],
                    date: ["周一", "周二", "周三", "周四", "周五", "周六", "周日" ]
                }

            }
        }
    },
    
}