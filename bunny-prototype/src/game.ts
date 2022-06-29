import * as PIXI from "pixi.js"
import planeImage from "./images/plane.png"
import luchtImage from "./images/lucht.jpg"
import { Plane } from "./Plane"

class bunnyGame {

    public pixi: PIXI.Application
    public loader: PIXI.Loader
    public background = luchtImage
    public planes : Plane [] = []
    planes: any

    constructor() {
        this.pixi = new PIXI.Application({
            width: innerWidth, height: innerHeight})
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add("backgroundTexture", luchtImage)
            .add("bunnyTexture", planeImage)
        this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log("all textures loaded!")
        this.background = new PIXI.Sprite(this.loader.resources["luchtTexture"].texture!)
        this.background.width = window.innerWidth;
        this.background.height = window.innerHeight;
        this.pixi.stage.addChild(this.background)

        // for (let i = 0; i < 25; i++) {
        //     let lonelyFish = new Fish(this.loader.resources["fishTexture"].texture!)
        //     this.pixi.stage.addChild(lonelyFish)
        //     this.fishes.push(lonelyFish)

        //     let manyBubbles = new Bubble(this.loader.resources["bubbleTexture"].texture!)
        //     this.pixi.stage.addChild(manyBubbles)
        //     this.bubbles.push(manyBubbles)

        // }
        for(let i = 0; i < 1; i++){
            let plane = new Plane(this.loader.resources["planeTexture"].texture!)
            this.pixi.stage.addChild(plane)
            this.planes.push(plane)
        }


        this.pixi.ticker.add((delta: number) => this.updateTheStage(delta))
    }

    updateTheStage(delta: number) {

        // for (let myfish of this.fishes) {
        //     myfish.swim()
        // }

        for (let myPlane of this.planes){
            myPlane.update();
        }

    }
}

new bunnyGame()