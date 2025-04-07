export class Serie{

    public name: string;
    public channel: string;
    public seasons: number;
    public tupleNum: number;
    public desc: string;
    public image: string;
    public link: string;

    constructor (name: string, channel: string, seasons: number, tupleNum:number, desc:string, image:string, link:string){
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.tupleNum = tupleNum;
        this.desc = desc;
        this.image = image;
        this.link = link;
    }
}