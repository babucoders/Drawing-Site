import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
init()
{
  var canvas,
    context,
    dragging = false,
    dragStartLocation, position;


function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;

    return {x: x, y: y};
}

function drawLine(position) {
    context.beginPath();
    context.moveTo(dragStartLocation.x, dragStartLocation.y);
    context.lineTo(position.x, position.y);
    context.stroke();
}

function dragStart(event) {
    dragging = true;
    dragStartLocation = getCanvasCoordinates(event);
}

function drag(event) {
   // var position;
    if (dragging === true) {
        position = getCanvasCoordinates(event);
       //drawLine(position);
    }
}

function dragStop(event) {
    dragging = false;
    position = getCanvasCoordinates(event);
    drawLine(position);
}

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');
    context.strokeStyle = 'purple';
    context.lineWidth = 6;
    context.lineCap = 'round';

    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
}

//window.addEventListener('load', init, false);
init();
}
rect()
{
  var canvas, ctx, rect, drag;
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    rect = {},
    drag = false;

function initOne() {
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown(e) {
  rect.startX = e.pageX - this.offsetLeft;
  rect.startY = e.pageY - this.offsetTop;
  drag = true;
}

function mouseUp() {
  drag = false;
   // ctx.clearRect(0,0,canvas.width,canvas.height);
}
function mouseMove(e) {
  if (drag) {
    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
    rect.h = (e.pageY - this.offsetTop) - rect.startY ;
   // ctx.clearRect(0,0,canvas.width,canvas.height);
    draw();
  }
}

function draw() {
    ctx.setLineDash([6]);
  ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
}

initOne();
}
exit()
{
  window.location.reload();
}
draw()
{
  var canvas, md=false;
  function initTwo()
{
  var canvas = document.getElementById('canvas');
	canvas.addEventListener('mousedown', down);
	canvas.addEventListener('mouseup', toggledraw);
    canvas.addEventListener('mousemove',
    function (evt) {
    	var mousePos = getMousePos(canvas, evt);
    	var posx = mousePos.x;
    	var posy = mousePos.y;
    	draw(canvas, posx, posy);
    });
}
	function down() {
		md=true;
	}
	function toggledraw() {
		md=false;
		canvas.style.cursor = 'default';
	}

	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x:evt.clientX - rect.left,
			y:evt.clientY - rect.top
		};
	}

	function draw(canvas, posx, posy) {
		var context = canvas.getContext('2d');
		if(md){
			canvas.style.cursor = 'pointer';
			context.strokeRect(posx, posy, 4,4);
		}
  }
  initTwo();
}
}
