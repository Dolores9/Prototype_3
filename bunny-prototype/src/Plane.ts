import * as PIXI from "pixi.js"

export class Plane extends PIXI.Sprite {

    xspeed = 0
    yspeed = 0
    speed: number

    constructor(texture: PIXI.Texture) {

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        super(texture)
        // this.x =  200
        // this.y =  220
        this.anchor.set(0.5)
        // this.scale.set(0.6)
        this.interactive = true
        this.buttonMode = true
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "ARROWUP":
                this.yspeed = -4
                break;
            case "ARROWDOWN":
                this.yspeed = 4
                break;
            case "ARROWLEFT":
                this.xspeed = -4
                this.scale.x = 0.6
                break;
            case "ARROWRIGHT":
                this.xspeed = 4
                this.scale.x = -0.6
                break;
        }
    }
    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "ARROWUP":
                this.yspeed = 0
                break;
            case "ARROWDOWN":
                this.yspeed = 0
                break;
            case "ARROWLEFT":
                this.xspeed = 0
                break;
            case "ARROWRIGHT":
                this.xspeed = 0
                break;
        }
    }

        update(delta: number) {
            this.x += this.xspeed
            this.y += this.yspeed
        }

}