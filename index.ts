class youtube{
    protected videoId:number;
    protected videotitle:string;
    protected numberOfViews:number;
    protected channelName: string;
    protected numberOfLikes:string;
    protected numberOfDislikes:string;
    protected numberOfComments:number;
    protected videoCategory:string;
    protected numberOfSubscriptions:number;
    protected publishedDate:string;
    protected videoDescription:string;
    protected relatedVideosId:any;
    protected videoDuration:string;


    constructor(videoId:number,videotitle:string,numberOfViews:number,channelName: string,numberOfLikes:string,numberOfDislikes:string,
        numberOfComments:number,videoCategory:string,numberOfSubscriptions:number,publishedDate:string
        ,videoDescription:string,videoDuration:string,relatedVideosId?:any){
        this.videoId=videoId;    
        this.videotitle=videotitle;
        this.numberOfViews=numberOfViews;
        this.channelName=channelName;
        this.numberOfLikes=numberOfLikes;
        this.numberOfDislikes=numberOfDislikes;
        this.numberOfComments=numberOfComments;
        this.videoCategory=videoCategory;
        this.numberOfSubscriptions=numberOfSubscriptions;
        this.publishedDate=publishedDate;
        this.videoDescription=videoDescription;
        this.relatedVideosId=relatedVideosId;
        this.videoDuration=videoDuration;
    }
    getVideoId=()=>{
        return this.videoId;
    }
    getVideoTitle=()=>{
        return this.videotitle;
    }
    getNumberOfViews=()=>{
        return this.numberOfViews;
    }
    setNumberOfViews=()=>{
        this.numberOfViews=this.numberOfViews+1;
    }
    getChannelName=()=>{
        return this.channelName;
    }
    getNumberOfLikes=()=>{
        return this.numberOfLikes;
    }
    setNumberOfLikes=()=>{
        this.numberOfLikes=this.numberOfLikes+1;
    }
    getNumberOfDislikes=()=>{
        return this.numberOfDislikes;
    }
    getNumberOfComments=()=>{
        return this.numberOfComments;
    }
    getVideoCategory=()=>{
        return this.videoCategory;
    }
    getNumberOfSubscriptions=()=>{
        return this.numberOfSubscriptions;
    }
    getPublishedDate=()=>{
        return this.publishedDate;
    }
    getVideoDescription=()=>{
        return this.videoDescription;
    }
    getRelatedVideosId=()=>{
        return this.relatedVideosId;
    }
    getVideoDuration=()=>{
        return this.videoDuration;
    }
}

class musicVideo extends youtube{
    protected songName:string;
    protected albumName:string;
    protected singer:string;
    protected lyricist:any;
    protected licensedBy:any;
    protected producer:string;
    protected availableOn:string;
    protected assistantDirector:any;

    constructor(videoId:number,videotitle:string,numberOfViews:number,channelName: string,numberOfLikes:string,
        numberOfDislikes:string,numberOfComments:number,videoCategory:string,numberOfSubscriptions:number,
        publishedDate:string,videoDescription:string,videoDuration:string,songName:string,
        albumName:string,singer:string,lyricist:any,licensedBy:any,producer:string,availableOn:string,
        assistantDirector:any,relatedVideosId?:any){

            super(videoId, videotitle, numberOfViews, channelName, numberOfLikes, numberOfDislikes, numberOfComments,
                videoCategory,numberOfSubscriptions, publishedDate, videoDescription, relatedVideosId, videoDuration);
            
            this.songName=songName;
            this.albumName=albumName;
            this.singer=singer;
            this.lyricist=lyricist;
            this.licensedBy=licensedBy;
            this.producer=producer;
            this.availableOn=availableOn;
            this.assistantDirector=assistantDirector;


    }
    getSongName=()=>{
        return this.songName;
    }
    getAlbumName=()=>{
        return this.albumName;
    }
    getSinger=()=>{
        return this.singer;
    }
    getLyricist=()=>{
        return this.lyricist;
    }
    getLicensedBy=()=>{
        return this.licensedBy;
    }
    getProducer=()=>{
        return this.producer;
    }
    getAvailableOn=()=>{
        return this.availableOn;
    }
    getAssistantDirector=()=>{
        
        if(typeof this.assistantDirector =='string'){
            console.log("Only 1 assistant director is there");
            return this.assistantDirector;

        }
        else{
            console.log("many directors are there");
            return this.assistantDirector;
        }
    }

}
class funnyVideo extends youtube{
    protected cast:string[];
    constructor(videoId:number,videotitle:string,numberOfViews:number,channelName: string,numberOfLikes:string,
        numberOfDislikes:string,numberOfComments:number,videoCategory:string,numberOfSubscriptions:number,
        publishedDate:string,videoDescription:string,relatedVideosId:any,videoDuration:string,cast:string[]){

            super(videoId, videotitle, numberOfViews, channelName, numberOfLikes, numberOfDislikes, numberOfComments,
                videoCategory,numberOfSubscriptions, publishedDate, videoDescription, relatedVideosId, videoDuration);
            this.cast=cast;    
        }
        getCast=()=>{
            return this.cast;
        }
}



let video1=new youtube(1210,"Can 20,000 Magnets Catch A Bullet Mid Air?",49414857,"MrBeast","571K","243K",5650,
"Entertainment",7.620,"Jul 28, 2018","I'VE ALWAYS WANTED TO SEE MAGNETS CATCH A BULLET","14m",[1212,1213]);

console.log(`VideoId:${video1.getVideoId()}`);
console.log(`Video Title:${video1.getVideoTitle()}`);
console.log(`No.Of views:${video1.getNumberOfViews()}`);
console.log(`after viewing`);
video1.setNumberOfViews();
console.log(`after viewing:${video1.getNumberOfViews()}`);
console.log(`channel name:${video1.getChannelName()}`);
console.log(`No.of likes:${video1.getNumberOfLikes()}`);
console.log(`No.of dislikes:${video1.getNumberOfDislikes()}`);
console.log(`No.of comments:${video1.getNumberOfComments()}`);
console.log(`Video Category:${video1.getVideoCategory()}`);
console.log(`No,of subscriptions:${video1.getNumberOfSubscriptions()}`);
console.log(`Published date:${video1.getPublishedDate()}`);
console.log(`Video desc:${video1.getVideoDescription()}`);
console.log(`RealtedVideosId:${video1.getRelatedVideosId()}`);
console.log(`Video duration:${video1.getVideoDuration()}`);
console.log(video1);




console.log("second video");
let video2=new musicVideo(1210,"Can 20,000 Magnets Catch A Bullet Mid Air?",49414857,"MrBeast","571K","243K",5650,
"Entertainment",7.620,"Jul 28, 2018","I'VE ALWAYS WANTED TO SEE MAGNETS CATCH A BULLET","14m","Mera Jahan Video Song",
"MERA JAHAN","Gajendra Verma",["Gajendra Verma", "Kunaal Verma"],
["Tseries Music (on behalf of T-Series); TSeries Publishing", "ASCAP", "UBEM", "UMPG Publishing", "and 9 Music Rights Societies"],
"amrit maan","Jul 26, 2017",["shubham","abhay"])
console.log(`VideoId:${video2.getVideoId()}`);
console.log(`Video Title:${video2.getVideoTitle()}`);
console.log(`No.Of views:${video2.getNumberOfViews()}`);
console.log(`after viewing`);
video2.setNumberOfViews();
console.log(`after viewing:${video2.getNumberOfViews()}`);
console.log(`channel name:${video2.getChannelName()}`);
console.log(`No.of likes:${video2.getNumberOfLikes()}`);
video2.setNumberOfLikes();
console.log("afte like");
console.log(`No.of likes:${video2.getNumberOfLikes()}`);
console.log(`No.of dislikes:${video2.getNumberOfDislikes()}`);
console.log(`No.of comments:${video2.getNumberOfComments()}`);
console.log(`Video Category:${video2.getVideoCategory()}`);
console.log(`No,of subscriptions:${video2.getNumberOfSubscriptions()}`);
console.log(`Published date:${video2.getPublishedDate()}`);
console.log(`Video desc:${video2.getVideoDescription()}`);
console.log(`RealtedVideosId:${video2.getRelatedVideosId()}`);
console.log(`Video duration:${video2.getVideoDuration()}`);
console.log(`Song name:${video2.getSongName()}`);
console.log(`Album name:${video2.getAlbumName()}`);
console.log(`Singer:${video2.getSinger()}`);
console.log(`Lyricist:${video2.getLyricist()}`);
console.log(`Licensed By:${video2.getLicensedBy()}`);
console.log(`Producer:${video2.getProducer()}`);
console.log(`Available on:${video2.getAvailableOn()}`);
console.log(`Assistant Director:${video2.getAssistantDirector()}`);







console.log(video2);