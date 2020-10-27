var dataUrl = "http://api.tianapi.com/caijing/index?key=564db19f863a9e3a00b231c1e48160ea&num=10";
var dataUrlBackup = "http://api.tianapi.com/caijing/index?key=564db19f863a9e3a00b231c1e48160ea&num=10";

$(document).ready(function() {
    initNews();
});

var initNews = function() {
    $.ajax({
        url: dataUrl,
        type: 'get',
        success: function(res) {
            if (res.msg === "success") {
                var news = res.newslist;
                news_1_pic = document.getElementById('news_1_pic');
                news_2_pic = document.getElementById('news_2_pic');
                news_3_pic = document.getElementById('news_3_pic');
                news_4_pic = document.getElementById('news_4_pic');
                news_5_pic = document.getElementById('news_5_pic');
                news_6_pic = document.getElementById('news_6_pic');
                news_7_pic = document.getElementById('news_7_pic');
                news_8_pic = document.getElementById('news_8_pic');
                news_9_pic = document.getElementById('news_9_pic');
                news_1_title = document.getElementById('news_1_title');
                news_2_title = document.getElementById('news_2_title');
                news_3_title = document.getElementById('news_3_title');
                news_4_title = document.getElementById('news_4_title');
                news_5_title = document.getElementById('news_5_title');
                news_6_title = document.getElementById('news_6_title');
                news_7_title = document.getElementById('news_7_title');
                news_8_title = document.getElementById('news_8_title');
                news_9_title = document.getElementById('news_9_title');
                news_4_date = document.getElementById('news_4_date');
                news_5_date = document.getElementById('news_5_date');
                news_6_date = document.getElementById('news_6_date');
                news_7_date = document.getElementById('news_7_date');
                news_8_date = document.getElementById('news_8_date');
                news_9_date = document.getElementById('news_9_date');

                news_1_pic.src = news[1].picUrl;
                news_2_pic.src = news[2].picUrl;
                news_3_pic.src = news[3].picUrl;
                news_4_pic.src = news[4].picUrl;
                news_5_pic.src = news[5].picUrl;
                news_6_pic.src = news[6].picUrl;
                news_7_pic.src = news[7].picUrl;
                news_8_pic.src = news[8].picUrl;
                news_9_pic.src = news[9].picUrl;

                news_4_date.innerHTML = news[4].ctime;
                news_5_date.innerHTML = news[5].ctime;
                news_6_date.innerHTML = news[6].ctime;
                news_7_date.innerHTML = news[7].ctime;
                news_8_date.innerHTML = news[8].ctime;
                news_9_date.innerHTML = news[9].ctime;

                news_1_title.href = news[1].url;
                news_2_title.href = news[2].url;
                news_3_title.href = news[3].url;
                news_4_title.href = news[4].url;
                news_5_title.href = news[5].url;
                news_6_title.href = news[6].url;
                news_7_title.href = news[7].url;
                news_8_title.href = news[8].url;
                news_9_title.href = news[9].url;

                news_1_title.innerHTML = news[1].title;
                news_2_title.innerHTML = news[2].title;
                news_3_title.innerHTML = news[3].title;
                news_4_title.innerHTML = news[4].title;
                news_5_title.innerHTML = news[5].title;
                news_6_title.innerHTML = news[6].title;
                news_7_title.innerHTML = news[7].title;
                news_8_title.innerHTML = news[8].title;
                news_9_title.innerHTML = news[9].title;

                var html = "";
                for (var i in news) {
                    html += '<div class="item">\n' +
                        '       <div class = "container" style="width:100%">\n' +
                        '           <div class="col-sm-2"><img src="' + news[i].picUrl + '" alt="news_pic" style="height: 79px;"></div>\n' +
                        '           <div class="col-sm-10"><div class="item-heading">\n' +
                        '                <div class="pull-right label label-success news-province">新闻</div>\n' +
                        '                <h4><a href="' + news[i].url + '" class="news-title" target="_blank">' + news[i].title + '</a></h4>\n' +
                        '               </div>\n' +
                        '               <div class="item-footer">\n' +
                        '                   <span class="text-muted"><i class="icon-comments news-source"></i> ' + news[i].description + '</span> &nbsp; <span class="text-muted news-time">' + news[i].ctime + '</span>\n' +
                        '               </div>\n' +
                        '           </div>\n' +
                        '       </div>\n' +
                        '   </div>';
                }


                return;
            }
            alert("获取数据失败");
        },
        error: function(res) {
            if (res.state() === "rejected" && !this.url.includes(dataUrlBackup)) {
                this.url = this.url.replace(dataUrl, dataUrlBackup);
                $.ajax(this);
            }
        }
    })
};