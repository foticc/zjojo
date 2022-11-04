import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, of, Subject, take, takeUntil, takeWhile } from 'rxjs';

interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'app-multiple-block',
  templateUrl: './multiple-block.component.html',
  styleUrls: ['./multiple-block.component.scss'],
})
export class MultipleBlockComponent implements OnInit, OnDestroy {
  random: number;
  log: Point;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  private destory$ = new Subject<void>();

  tempPoint: Point = { x: 300, y: 300 };

  points: Array<Point> = [
    { x: 400, y: 100 },
    { x: 10, y: 600 },
    { x: 790, y: 600 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    // interval(1)
    //   .pipe(
    //     takeUntil(this.destory$),
    //     map((m) => {
    //       this.start();
    //       return Math.floor(Math.random() * 3);
    //     })
    //   )
    //   .subscribe((v) => {
    //     // this.random = v;
    //   });
    // this.draw(this.ctx);
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }

  start() {
    const random = Math.floor(Math.random() * 3);
    this.random = random;
    const point = this.points[random];

    //
    const temp = {
      x: (this.tempPoint.x + point.x) / 2,
      y: (this.tempPoint.y + point.y) / 2,
    };
    // this.log = temp;
    this.drawPoint(this.ctx, temp);
    // this.ctx.beginPath();
    // this.ctx.moveTo(this.tempPoint.x, this.tempPoint.y);
    // this.ctx.lineTo(point.x, point.y);
    // this.ctx.closePath();
    // this.ctx.stroke();
    // this.ctx.save();

    this.tempPoint = temp;
  }

  //定义 开始暂停操作符

  private draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();

    ctx.moveTo(this.points[0].x, this.points[0].y);
    ctx.fillText('0', this.points[0].x, this.points[0].y);

    ctx.lineTo(this.points[1].x, this.points[1].y);
    ctx.fillText('1', this.points[1].x, this.points[1].y);

    ctx.lineTo(this.points[2].x, this.points[2].y);
    ctx.fillText('2', this.points[2].x, this.points[2].y);
    ctx.closePath();
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.arc(this.tempPoint.x, this.tempPoint.y, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = 'antiquewhite';
    ctx.fill();
    ctx.save();
  }

  private drawPoint(ctx: CanvasRenderingContext2D, point: Point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = 'antiquewhite';
    ctx.fill();
    ctx.save();
  }
}
