var dataUrl = "http://api.tianapi.com/caijing/index?key=564db19f863a9e3a00b231c1e48160ea&num=50";
var dataUrlBackup = "http://api.tianapi.com/caijing/index?key=564db19f863a9e3a00b231c1e48160ea&num=50";

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
                console.log(news)
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

                $(".items").html(html);

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