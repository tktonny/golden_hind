var w = window.innerWidth;
var stock_market = echarts.init(document.getElementById('stock_market'));
stock_market.showLoading({
    animation: 'QuarticIn',
    text: 'Loading',
});


$(document).ready(function() {
    initChart1();
});

var initChart1 = function() {
    // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
    var data0 = splitData([
        ['2016-05-20', 3.781, 3.81, 3.761, 3.82],
        ['2016-05-23', 3.81, 3.84, 3.81, 3.849],
        ['2016-05-24', 3.84, 3.81, 3.8, 3.84],
        ['2016-05-25', 3.83, 3.81, 3.8, 3.849],
        ['2016-05-26', 3.81, 3.82, 3.781, 3.84],
        ['2016-05-27', 3.82, 3.81, 3.8, 3.84],
        ['2016-05-30', 3.81, 3.83, 3.781, 3.83],
        ['2016-05-31', 3.8, 3.938, 3.79, 3.958],
        ['2016-06-01', 3.928, 3.909, 3.899, 3.938],
        ['2016-06-02', 3.909, 3.899, 3.869, 3.918],
        ['2016-06-03', 3.899, 3.909, 3.879, 3.928],
        ['2016-06-06', 3.909, 3.899, 3.869, 3.918],
        ['2016-06-07', 3.899, 3.879, 3.869, 3.899],
        ['2016-06-08', 3.889, 3.859, 3.84, 3.889],
        ['2016-06-13', 3.83, 3.781, 3.771, 3.84],
        ['2016-06-14', 3.761, 3.8, 3.761, 3.8],
        ['2016-06-15', 3.771, 3.82, 3.761, 3.84],
        ['2016-06-16', 3.81, 3.781, 3.761, 3.83],
        ['2016-06-17', 3.781, 3.781, 3.761, 3.8],
        ['2016-06-20', 3.781, 3.781, 3.761, 3.79],
        ['2016-06-21', 3.79, 3.761, 3.731, 3.81],
        ['2016-06-22', 3.751, 3.771, 3.731, 3.781],
        ['2016-06-23', 3.771, 3.781, 3.751, 3.889],
        ['2016-06-24', 3.79, 3.761, 3.692, 3.81],
        ['2016-06-27', 3.731, 3.79, 3.721, 3.8],
        ['2016-06-28', 3.79, 3.79, 3.741, 3.79],
        ['2016-06-29', 3.79, 3.8, 3.771, 3.849],
        ['2016-06-30', 3.82, 3.81, 3.79, 3.82],
        ['2016-07-01', 3.82, 3.82, 3.81, 3.84],
        ['2016-07-04', 3.81, 3.87, 3.8, 3.88],
        ['2016-07-05', 3.87, 3.91, 3.86, 3.95],
        ['2016-07-06', 3.89, 3.91, 3.86, 3.92],
        ['2016-07-07', 3.91, 3.94, 3.88, 3.97],
        ['2016-07-08', 3.94, 3.91, 3.89, 3.94],
        ['2016-07-11', 3.91, 3.9, 3.89, 3.95],
        ['2016-07-12', 3.9, 4.05, 3.9, 4.09],
        ['2016-07-13', 4.06, 4.34, 4.05, 4.46],
        ['2016-07-14', 4.28, 4.26, 4.21, 4.3],
        ['2016-07-15', 4.25, 4.25, 4.21, 4.28],
        ['2016-07-18', 4.28, 4.29, 4.22, 4.38],
        ['2016-07-19', 4.27, 4.24, 4.18, 4.29],
        ['2016-07-20', 4.23, 4.21, 4.2, 4.25],
        ['2016-07-21', 4.21, 4.21, 4.18, 4.24],
        ['2016-07-22', 4.21, 4.2, 4.16, 4.22],
        ['2016-07-25', 4.19, 4.16, 4.15, 4.2],
        ['2016-07-26', 4.17, 4.29, 4.16, 4.33],
        ['2016-07-27', 4.29, 4.33, 4.15, 4.36],
        ['2016-07-28', 4.29, 4.4, 4.26, 4.49],
        ['2016-07-29', 4.36, 4.26, 4.25, 4.45],
        ['2016-08-01', 4.22, 4.19, 4.14, 4.23],
        ['2016-08-02', 4.19, 4.24, 4.18, 4.24],
        ['2016-08-03', 4.23, 4.26, 4.22, 4.31],
        ['2016-08-04', 4.26, 4.28, 4.2, 4.29],
        ['2016-08-05', 4.27, 4.24, 4.21, 4.28],
        ['2016-08-08', 4.22, 4.25, 4.19, 4.25],
        ['2016-08-09', 4.24, 4.25, 4.21, 4.27],
        ['2016-08-10', 4.25, 4.27, 4.25, 4.34],
        ['2016-08-11', 4.27, 4.22, 4.21, 4.3],
        ['2016-08-12', 4.22, 4.29, 4.21, 4.29],
        ['2016-08-15', 4.28, 4.42, 4.27, 4.47],
        ['2016-08-16', 4.44, 4.48, 4.43, 4.63],
        ['2016-08-17', 4.49, 4.44, 4.4, 4.55],
        ['2016-08-18', 4.44, 4.57, 4.41, 4.63],
        ['2016-08-19', 4.55, 4.56, 4.47, 4.59],
        ['2016-08-22', 4.56, 4.46, 4.44, 4.58],
        ['2016-08-23', 4.45, 4.42, 4.38, 4.48],
        ['2016-08-24', 4.41, 4.38, 4.37, 4.44],
        ['2016-08-25', 4.37, 4.33, 4.29, 4.37],
        ['2016-08-26', 4.33, 4.34, 4.3, 4.37],
        ['2016-08-29', 4.33, 4.26, 4.21, 4.34],
        ['2016-08-30', 4.26, 4.28, 4.25, 4.28],
        ['2016-08-31', 4.27, 4.28, 4.25, 4.29],
        ['2016-09-01', 4.29, 4.23, 4.22, 4.29],
        ['2016-09-02', 4.23, 4.23, 4.21, 4.24],
        ['2016-09-05', 4.24, 4.24, 4.22, 4.27],
        ['2016-09-06', 4.24, 4.28, 4.2, 4.29],
        ['2016-09-07', 4.28, 4.27, 4.26, 4.32],
        ['2016-09-08', 4.28, 4.27, 4.25, 4.29],
        ['2016-09-09', 4.27, 4.24, 4.23, 4.28],
        ['2016-09-12', 4.2, 4.16, 4.09, 4.2],
        ['2016-09-13', 4.16, 4.13, 4.12, 4.17],
        ['2016-09-14', 4.13, 4.09, 4.08, 4.13],
        ['2016-09-19', 4.11, 4.11, 4.09, 4.13],
        ['2016-09-20', 4.11, 4.08, 4.06, 4.11],
        ['2016-09-21', 4.08, 4.09, 4.07, 4.11],
        ['2016-09-22', 4.1, 4.11, 4.09, 4.13],
        ['2016-09-23', 4.12, 4.19, 4.12, 4.22],
        ['2016-09-26', 4.18, 4.11, 4.09, 4.18],
        ['2016-09-27', 4.08, 4.13, 4.08, 4.14],
        ['2016-09-28', 4.13, 4.18, 4.11, 4.2],
        ['2016-09-29', 4.17, 4.17, 4.16, 4.22],
        ['2016-09-30', 4.16, 4.15, 4.14, 4.22],
        ['2016-10-10', 4.31, 4.36, 4.26, 4.38],
        ['2016-10-11', 4.35, 4.8, 4.32, 4.8],
        ['2016-10-12', 4.9, 4.73, 4.68, 4.93],
        ['2016-10-13', 4.71, 4.72, 4.66, 4.8],
        ['2016-10-14', 4.71, 5.17, 4.66, 5.19],
        ['2016-10-17', 5.03, 5.06, 5.0, 5.25],
        ['2016-10-18', 5.02, 5.11, 4.98, 5.24],
        ['2016-10-19', 5.12, 5.3, 5.1, 5.59],
        ['2016-10-20', 5.26, 5.3, 5.22, 5.41],
        ['2016-10-21', 5.25, 5.36, 5.22, 5.45],
        ['2016-10-24', 5.36, 5.33, 5.26, 5.41],
        ['2016-10-25', 5.33, 5.27, 5.18, 5.36],
        ['2016-10-26', 5.23, 5.34, 5.19, 5.36],
        ['2016-10-27', 5.3, 5.18, 5.15, 5.32],
        ['2016-10-28', 5.17, 5.13, 5.12, 5.24],
        ['2016-10-31', 5.12, 5.13, 5.1, 5.16],
        ['2016-11-01', 5.13, 5.19, 5.11, 5.26],
        ['2016-11-02', 5.17, 5.09, 5.07, 5.18],
        ['2016-11-03', 5.18, 5.27, 5.05, 5.31],
        ['2016-11-04', 5.25, 5.4, 5.23, 5.65],
        ['2016-11-07', 5.35, 5.39, 5.27, 5.44],
        ['2016-11-08', 5.4, 5.31, 5.28, 5.42],
        ['2016-11-09', 5.3, 5.18, 5.1, 5.33],
        ['2016-11-10', 5.24, 5.22, 5.17, 5.29],
        ['2016-11-11', 5.19, 5.3, 5.14, 5.37],
        ['2016-11-14', 5.49, 5.55, 5.32, 5.67],
        ['2016-11-15', 5.5, 5.42, 5.38, 5.53],
        ['2016-11-16', 5.43, 5.71, 5.32, 5.8],
        ['2016-11-17', 5.64, 5.97, 5.61, 6.08],
        ['2016-11-18', 5.91, 5.93, 5.85, 6.03],
        ['2016-11-21', 5.95, 5.93, 5.86, 6.01],
        ['2016-11-22', 5.93, 5.98, 5.9, 6.19],
        ['2016-11-23', 5.93, 5.8, 5.77, 5.95],
        ['2016-11-24', 5.8, 5.82, 5.75, 5.85],
        ['2016-11-25', 5.8, 5.93, 5.77, 5.93],
        ['2016-11-28', 5.96, 6.05, 5.92, 6.15],
        ['2016-11-29', 6.02, 6.15, 5.97, 6.29],
        ['2016-11-30', 6.07, 6.66, 6.05, 6.77],
        ['2016-12-01', 6.76, 7.33, 6.6, 7.33],
        ['2016-12-02', 7.3, 6.84, 6.79, 7.37],
        ['2016-12-05', 6.55, 6.78, 6.45, 7.06],
        ['2016-12-06', 6.78, 6.64, 6.5, 6.89],
        ['2016-12-07', 6.6, 6.56, 6.38, 6.63],
        ['2016-12-08', 6.65, 7.01, 6.6, 7.07],
        ['2016-12-09', 6.94, 7.01, 6.75, 7.08],
        ['2016-12-12', 7.0, 6.81, 6.73, 7.28],
        ['2016-12-13', 6.72, 7.23, 6.68, 7.26],
        ['2016-12-14', 7.13, 6.85, 6.83, 7.42],
        ['2016-12-15', 6.65, 6.74, 6.56, 6.84],
        ['2016-12-16', 6.7, 6.79, 6.7, 6.95],
        ['2016-12-19', 6.94, 6.86, 6.82, 7.09],
        ['2016-12-20', 6.87, 7.1, 6.7, 7.12],
        ['2016-12-21', 7.15, 7.37, 7.07, 7.7],
        ['2016-12-22', 7.32, 7.68, 7.26, 7.7],
        ['2016-12-23', 7.7, 7.81, 7.6, 8.05],
        ['2016-12-26', 7.7, 7.81, 7.61, 7.96],
        ['2016-12-27', 7.84, 7.55, 7.44, 7.91],
        ['2016-12-28', 7.51, 7.69, 7.4, 7.7],
        ['2016-12-29', 7.62, 7.54, 7.47, 7.72],
        ['2016-12-30', 7.6, 7.31, 7.22, 7.6],
        ['2017-01-03', 7.25, 7.44, 7.22, 7.56],
        ['2017-01-04', 7.4, 7.43, 7.3, 7.48],
        ['2017-01-05', 7.39, 7.84, 7.37, 7.86],
        ['2017-01-06', 7.75, 7.68, 7.62, 7.87],
        ['2017-01-09', 7.66, 7.71, 7.51, 7.78],
        ['2017-01-10', 7.67, 7.54, 7.52, 7.8],
        ['2017-01-11', 7.48, 6.9, 6.79, 7.52],
        ['2017-01-12', 6.78, 6.67, 6.53, 6.87],
        ['2017-01-13', 6.6, 6.63, 6.58, 6.8],
        ['2017-01-16', 6.59, 6.59, 6.2, 6.68],
        ['2017-01-17', 6.5, 6.56, 6.41, 6.6],
        ['2017-01-18', 6.58, 6.62, 6.57, 6.74],
        ['2017-01-19', 6.55, 6.27, 6.22, 6.6],
        ['2017-01-20', 6.25, 6.31, 6.15, 6.39],
        ['2017-01-23', 6.3, 6.35, 6.28, 6.39],
        ['2017-01-24', 6.34, 6.32, 6.3, 6.39],
        ['2017-01-25', 6.3, 6.59, 6.25, 6.63],
        ['2017-01-26', 6.5, 6.54, 6.45, 6.61],
        ['2017-02-03', 6.51, 6.52, 6.51, 6.62],
        ['2017-02-06', 6.51, 6.52, 6.35, 6.54],
        ['2017-02-07', 6.48, 6.5, 6.42, 6.6],
        ['2017-02-08', 6.49, 6.79, 6.45, 6.84],
        ['2017-02-09', 6.75, 6.79, 6.72, 6.82],
        ['2017-02-10', 6.78, 6.78, 6.74, 6.95],
        ['2017-02-13', 6.72, 6.84, 6.7, 6.87],
        ['2017-02-14', 6.83, 6.82, 6.75, 6.88],
        ['2017-02-15', 6.83, 6.73, 6.71, 6.83],
        ['2017-02-16', 6.74, 6.73, 6.66, 6.78],
        ['2017-02-17', 6.69, 6.5, 6.48, 6.71],
        ['2017-02-20', 6.45, 6.54, 6.41, 6.59],
        ['2017-02-21', 6.52, 6.59, 6.5, 6.68],
        ['2017-02-22', 6.57, 6.59, 6.53, 6.64],
        ['2017-02-23', 6.58, 6.55, 6.52, 6.61],
        ['2017-02-24', 6.55, 7.08, 6.53, 7.2],
        ['2017-02-27', 7.0, 7.03, 6.93, 7.13],
        ['2017-02-28', 7.03, 7.03, 6.84, 7.06],
        ['2017-03-01', 6.99, 7.19, 6.97, 7.4],
        ['2017-03-02', 7.19, 7.12, 7.08, 7.34],
        ['2017-03-03', 7.06, 7.08, 6.98, 7.18],
        ['2017-03-06', 7.05, 7.21, 6.99, 7.29],
        ['2017-03-07', 7.37, 7.16, 7.14, 7.55],
        ['2017-03-08', 7.17, 7.7, 7.11, 7.88],
        ['2017-03-09', 7.61, 7.75, 7.59, 7.85],
        ['2017-03-10', 7.75, 7.78, 7.55, 7.84],
        ['2017-03-13', 7.73, 7.41, 7.35, 7.74],
        ['2017-03-14', 7.36, 7.38, 7.36, 7.48],
        ['2017-03-15', 7.38, 7.48, 7.32, 7.57],
        ['2017-03-16', 7.5, 7.69, 7.45, 7.74],
        ['2017-03-17', 7.66, 7.77, 7.58, 7.96],
        ['2017-03-20', 7.78, 7.77, 7.62, 7.9],
        ['2017-03-21', 7.71, 7.66, 7.62, 7.74],
        ['2017-03-22', 7.62, 7.66, 7.42, 7.74],
        ['2017-03-23', 7.66, 7.79, 7.61, 7.82],
        ['2017-03-24', 7.83, 7.66, 7.62, 7.85],
        ['2017-03-27', 7.65, 7.53, 7.51, 7.71],
        ['2017-03-28', 7.52, 7.44, 7.3, 7.54],
        ['2017-03-29', 7.4, 7.43, 7.36, 7.58],
        ['2017-03-30', 7.4, 7.34, 7.32, 7.55],
        ['2017-03-31', 7.32, 7.47, 7.32, 7.53]
    ]);

    function splitData(rawData) {
        var categoryData = [];
        var values = []
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            values.push(rawData[i])
        }
        return {
            categoryData: categoryData,
            values: values
        };
    }

    function calculateMA(dayCount) {
        var result = [];
        for (var i = 0, len = data0.values.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += data0.values[i - j][1];
            }
            result.push(sum / dayCount);
        }
        return result;
    }

    option = {
        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{ //渐变
                    offset: 0,
                    color: '#000000' // 0% 处的颜色
                },
                {
                    offset: 0.5,
                    color: '#222222'
                },
                {
                    offset: 1,
                    color: '#1e1e1e' // 100% 处的颜色
                }
            ],
        },
        grid: {
            top: '15%',
            left: '5%',
            right: '5%',
            bottom: '15%',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            axisLabel: { color: 'white' }, // x轴字体颜色


            axisLine: {
                lineStyle: { color: 'white' } // x轴坐标轴颜色
            },


            axisTick: {
                lineStyle: { color: 'white' } // x轴刻度的颜色
            },

            type: 'category',
            data: data0.categoryData,
            scale: true,
            boundaryGap: false,
            axisLine: {
                onZero: false
            },
            splitLine: {
                show: false
            },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        },
        yAxis: {
            scale: true,
            axisLabel: { color: 'white' }, // y轴字体颜色


            axisLine: {
                lineStyle: { color: 'white' } // y轴坐标轴颜色
            },


            axisTick: {
                lineStyle: { color: 'white' } // y轴刻度的颜色
            },
        },
        dataZoom: [{
            type: 'inside',
            start: 40,
            end: 100
        }, {
            show: true,
            type: 'slider',
            y: '90%',
            start: 50,
            end: 100
        }],
        series: [{
                name: '日K',
                type: 'candlestick',
                data: data0.values,


            }, {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'white'
                    }
                }
            }, {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'aqua'
                    }
                }
            }, {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'yellow'
                    }
                }
            }, {
                name: 'MA30',
                type: 'line',
                data: calculateMA(30),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },

        ]
    };
    stock_market.hideLoading();
    stock_market.setOption(option);
}