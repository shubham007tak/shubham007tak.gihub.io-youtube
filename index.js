var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var youtube = /** @class */ (function () {
    function youtube(videoId, videotitle, numberOfViews, channelName, numberOfLikes, numberOfDislikes, numberOfComments, videoCategory, numberOfSubscriptions, publishedDate, videoDescription, videoDuration, relatedVideosId) {
        var _this = this;
        this.getVideoId = function () {
            return _this.videoId;
        };
        this.getVideoTitle = function () {
            return _this.videotitle;
        };
        this.getNumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.setNumberOfViews = function () {
            _this.numberOfViews = _this.numberOfViews + 1;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.setNumberOfLikes = function () {
            _this.numberOfLikes = _this.numberOfLikes + 1;
        };
        this.getNumberOfDislikes = function () {
            return _this.numberOfDislikes;
        };
        this.getNumberOfComments = function () {
            return _this.numberOfComments;
        };
        this.getVideoCategory = function () {
            return _this.videoCategory;
        };
        this.getNumberOfSubscriptions = function () {
            return _this.numberOfSubscriptions;
        };
        this.getPublishedDate = function () {
            return _this.publishedDate;
        };
        this.getVideoDescription = function () {
            return _this.videoDescription;
        };
        this.getRelatedVideosId = function () {
            return _this.relatedVideosId;
        };
        this.getVideoDuration = function () {
            return _this.videoDuration;
        };
        this.videoId = videoId;
        this.videotitle = videotitle;
        this.numberOfViews = numberOfViews;
        this.channelName = channelName;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDislikes = numberOfDislikes;
        this.numberOfComments = numberOfComments;
        this.videoCategory = videoCategory;
        this.numberOfSubscriptions = numberOfSubscriptions;
        this.publishedDate = publishedDate;
        this.videoDescription = videoDescription;
        this.relatedVideosId = relatedVideosId;
        this.videoDuration = videoDuration;
    }
    return youtube;
}());
var musicVideo = /** @class */ (function (_super) {
    __extends(musicVideo, _super);
    function musicVideo(videoId, videotitle, numberOfViews, channelName, numberOfLikes, numberOfDislikes, numberOfComments, videoCategory, numberOfSubscriptions, publishedDate, videoDescription, videoDuration, songName, albumName, singer, lyricist, licensedBy, producer, availableOn, assistantDirector, relatedVideosId) {
        var _this = _super.call(this, videoId, videotitle, numberOfViews, channelName, numberOfLikes, numberOfDislikes, numberOfComments, videoCategory, numberOfSubscriptions, publishedDate, videoDescription, relatedVideosId, videoDuration) || this;
        _this.getSongName = function () {
            return _this.songName;
        };
        _this.getAlbumName = function () {
            return _this.albumName;
        };
        _this.getSinger = function () {
            return _this.singer;
        };
        _this.getLyricist = function () {
            return _this.lyricist;
        };
        _this.getLicensedBy = function () {
            return _this.licensedBy;
        };
        _this.getProducer = function () {
            return _this.producer;
        };
        _this.getAvailableOn = function () {
            return _this.availableOn;
        };
        _this.getAssistantDirector = function () {
            if (typeof _this.assistantDirector == 'string') {
                console.log("Only 1 assistant director is there");
                return _this.assistantDirector;
            }
            else {
                console.log("many directors are there");
                return _this.assistantDirector;
            }
        };
        _this.songName = songName;
        _this.albumName = albumName;
        _this.singer = singer;
        _this.lyricist = lyricist;
        _this.licensedBy = licensedBy;
        _this.producer = producer;
        _this.availableOn = availableOn;
        _this.assistantDirector = assistantDirector;
        return _this;
    }
    return musicVideo;
}(youtube));
var funnyVideo = /** @class */ (function (_super) {
    __extends(funnyVideo, _super);
    function funnyVideo(videoId, videotitle, numberOfViews, channelName, numberOfLikes, numberOfDislikes, numberOfComments, videoCategory, numberOfSubscriptions, publishedDate, videoDescription, relatedVideosId, videoDuration, cast) {
        var _this = _super.call(this, videoId, videotitle, numberOfViews, channelName, numberOfLikes, numberOfDislikes, numberOfComments, videoCategory, numberOfSubscriptions, publishedDate, videoDescription, relatedVideosId, videoDuration) || this;
        _this.getCast = function () {
            return _this.cast;
        };
        _this.cast = cast;
        return _this;
    }
    return funnyVideo;
}(youtube));
var video1 = new youtube(1210, "Can 20,000 Magnets Catch A Bullet Mid Air?", 49414857, "MrBeast", "571K", "243K", 5650, "Entertainment", 7.620, "Jul 28, 2018", "I'VE ALWAYS WANTED TO SEE MAGNETS CATCH A BULLET", "14m", [1212, 1213]);
console.log("VideoId:" + video1.getVideoId());
console.log("Video Title:" + video1.getVideoTitle());
console.log("No.Of views:" + video1.getNumberOfViews());
console.log("after viewing");
video1.setNumberOfViews();
console.log("after viewing:" + video1.getNumberOfViews());
console.log("channel name:" + video1.getChannelName());
console.log("No.of likes:" + video1.getNumberOfLikes());
console.log("No.of dislikes:" + video1.getNumberOfDislikes());
console.log("No.of comments:" + video1.getNumberOfComments());
console.log("Video Category:" + video1.getVideoCategory());
console.log("No,of subscriptions:" + video1.getNumberOfSubscriptions());
console.log("Published date:" + video1.getPublishedDate());
console.log("Video desc:" + video1.getVideoDescription());
console.log("RealtedVideosId:" + video1.getRelatedVideosId());
console.log("Video duration:" + video1.getVideoDuration());
console.log(video1);
console.log("second video");
var video2 = new musicVideo(1210, "Can 20,000 Magnets Catch A Bullet Mid Air?", 49414857, "MrBeast", "571K", "243K", 5650, "Entertainment", 7.620, "Jul 28, 2018", "I'VE ALWAYS WANTED TO SEE MAGNETS CATCH A BULLET", "14m", "Mera Jahan Video Song", "MERA JAHAN", "Gajendra Verma", ["Gajendra Verma", "Kunaal Verma"], ["Tseries Music (on behalf of T-Series); TSeries Publishing", "ASCAP", "UBEM", "UMPG Publishing", "and 9 Music Rights Societies"], "amrit maan", "Jul 26, 2017", ["shubham"]);
console.log("VideoId:" + video2.getVideoId());
console.log("Video Title:" + video2.getVideoTitle());
console.log("No.Of views:" + video2.getNumberOfViews());
console.log("after viewing");
video2.setNumberOfViews();
console.log("after viewing:" + video2.getNumberOfViews());
console.log("channel name:" + video2.getChannelName());
console.log("No.of likes:" + video2.getNumberOfLikes());
video2.setNumberOfLikes();
console.log("afte like");
console.log("No.of likes:" + video2.getNumberOfLikes());
console.log("No.of dislikes:" + video2.getNumberOfDislikes());
console.log("No.of comments:" + video2.getNumberOfComments());
console.log("Video Category:" + video2.getVideoCategory());
console.log("No,of subscriptions:" + video2.getNumberOfSubscriptions());
console.log("Published date:" + video2.getPublishedDate());
console.log("Video desc:" + video2.getVideoDescription());
console.log("RealtedVideosId:" + video2.getRelatedVideosId());
console.log("Video duration:" + video2.getVideoDuration());
console.log("Song name:" + video2.getSongName());
console.log("Album name:" + video2.getAlbumName());
console.log("Singer:" + video2.getSinger());
console.log("Lyricist:" + video2.getLyricist());
console.log("Licensed By:" + video2.getLicensedBy());
console.log("Producer:" + video2.getProducer());
console.log("Available on:" + video2.getAvailableOn());
console.log("Assistant Director:" + video2.getAssistantDirector());
console.log(video2);
