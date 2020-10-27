var dataUrl = "https://lab.isaaclin.cn/nCoV/";
var dataUrlBackup = "https://lab.ahusmart.com/nCoV/";

$(document).ready(function() {
    initChart2();
});

var initChart2 = function() {
    /*
        $.ajax({
            url: dataUrl + 'api/area',
            type: 'get',
            success: function(res) {
                if (res.success === true) {
                    var chartData = res.results;
                    var datalist1 = [];
                    var datalist2 = [];
                    count1 = 0;
                    count2 = 0;
                    for (var i in chartData) {
                        if (chartData[i].countryName == '中国' || chartData[i].country == '中国') {
                            var provincename = chartData[i].provinceShortName;
                            var confirm = chartData[i].confirmedCount;
                            var cure = chartData[i].curedCount;
                            var dead = chartData[i].deadCount;
                            var curerate = cure / confirm;
                            var deathrate = dead / confirm;
                            datalist1[count1] = [
                                curerate,
                                deathrate,
                                confirm,
                                dead,
                                provincename,
                            ]
                            count1++;
                        }
                    }
                    for (var i in chartData) {
                        if (chartData[i].countryName != '中国' && chartData[i].country != '中国') {
                            var countryname = chartData[i].provinceShortName;
                            var confirm = chartData[i].confirmedCount;
                            var cure = chartData[i].curedCount;
                            var dead = chartData[i].deadCount;
                            var curerate = cure / confirm;
                            var deathrate = dead / confirm;
                            datalist2[count2] = [
                                curerate,
                                deathrate,
                                confirm,
                                dead,
                                countryname,
                            ]
                            count2++;
                        }
                    }
                    console.log(datalist1);
                    console.log(datalist2);
                    initChart2();
                    return;
                }
                alert("获取数据失败");
            },
            error: function(res) {
                if (res.state() === "rejected" && !this.url.includes(dataUrlBackup)) {
                    alert("cure-death_chart获取数据失败\n启用备份数据");
                    this.url = this.url.replace(dataUrl, dataUrlBackup);
                    $.ajax(this);
                }
            }
        });
        */
    var radar = echarts.init(document.getElementById('radar'));

    var dataname = ['A', 'B', 'C', 'D', 'E', 'F']
    var datamax = [20, 20, 20, 20, 20, 20]
    var datavaule = [9, 16, 16, 15, 12, 8]


    var indicator = []
    for (var i = 0; i < dataname.length; i++) {
        indicator.push({
            name: dataname[i],
            max: datamax[i],
        })
    }

    option = {

        tooltip: {
            show: true,
            trigger: "item",
        },
        radar: {
            center: ["50%", "50%"],
            radius: "65%",
            startAngle: 90,
            splitNumber: 5,
            splitArea: {
                areaStyle: {
                    color: ['rgba(0,0,0,0.5)', 'rgba(255,255,255,0.1)', ].reverse(),
                }
            },
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#fff"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#fff"
                }
            },
            name: {
                formatter: '{value}',
                textStyle: {
                    color: '#656565',
                    fontSize: 15,
                },
            },
            indicator: indicator
        },

        series: [{
            name: "您的风险偏好",
            type: "radar",
            symbol: "none",
            symbolSize: 6,
            areaStyle: {
                normal: {
                    color: '#F6464A',
                }
            },
            itemStyle: {
                color: 'red',
            },
            lineStyle: {
                normal: {
                    color: "red",
                    width: 2
                }
            },
            data: [datavaule]
        }]
    };
    radar.setOption(option);

}