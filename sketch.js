let dance;

function preload()
{
	dance = loadImage("dance-happy.gif");
}

function setup() 
{
	createCanvas(1000, 1000);
}

function draw()
{
image(dance, 0, 0);
}
