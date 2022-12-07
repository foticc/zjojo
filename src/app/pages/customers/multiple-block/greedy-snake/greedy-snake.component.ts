import { Component, OnInit } from '@angular/core';
import { fromEvent, map } from 'rxjs';

interface foodBlock {
  x: number;
  y: number;
}

@Component({
  selector: 'app-greedy-snake',
  templateUrl: './greedy-snake.component.html',
  styleUrls: ['./greedy-snake.component.scss'],
})
export class GreedySnakeComponent implements OnInit {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  food: foodBlock;
  body: Document;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit ');
    this.body = document;
    this.canvas = document.getElementById('ctx') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.initCanvas(this.ctx);
    fromEvent(this.body, 'keydown').subscribe((v) => {
      console.log('v', v);
    });
  }

  private initCanvas(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 800, 800);
    ctx.save();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    for (let index = 0; index < 40; index++) {
      ctx.moveTo(0, (index + 1) * 20);
      ctx.lineTo(800, (index + 1) * 20);
      ctx.closePath();
      ctx.stroke();
      ctx.save();
    }
    for (let index = 0; index < 40; index++) {
      ctx.moveTo((index + 1) * 20, 0);
      ctx.lineTo((index + 1) * 20, 800);
      ctx.closePath();
      ctx.stroke();
      ctx.save();
    }
  }

  // 40 * 40
  randomSeat() {
    this.ctx.restore();
    const x = Math.floor(Math.random() * 40);
    const y = Math.floor(Math.random() * 40);
    this.food = {
      x,
      y,
    };
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(x * 20, y * 20, 20, 20);
    this.ctx.save();
  }
}
