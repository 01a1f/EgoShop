# -*- codeing = utf-8 -*-
# @Time : 2022/10/12 14:28
# @Author : 可乐不加糖
# @File : Usdzddun.py
# @Software: PyCharm
import turtle # 导入turtle库
import math # 导入math库
turtle.speed(0) # 设置turtle的速度最快
# 先绘制一个长方形，并且填充颜色成灰色
turtle.setup(1800,1800,0,0)
turtle.penup() # 抬起画笔
turtle.goto(-900,500)
turtle.pendown()
turtle.begin_fill()
turtle.fillcolor("grey")
turtle.pencolor("red")
for i in range(2):
    turtle.forward(1920)
    turtle.right(90)
    turtle.forward(1080)
    turtle.right(90)
turtle.end_fill()
turtle.speed(0) # 设置turtle速度最快
color_list = ['red','white','red','blue'] # 填充颜色
xy_list = [(0,-240),(0,-180),(0,-120),(0,-60)] # 从大到小四个圆的起始坐标
# 画圆
for i in range(4):
    turtle.penup()
    turtle.goto(xy_list[i])
    turtle.pendown()
    turtle.begin_fill()
    turtle.pencolor(color_list[i])
    turtle.fillcolor(color_list[i])
    turtle.circle(240-(i*60))
    turtle.end_fill()
# 画五角星
width = (math.sin(math.radians(36))*60) / math.sin(math.radians(126))
# 绘制内五角星
turtle.penup()
turtle.goto(0,60)
turtle.pendown()
turtle.right(72)
turtle.pencolor("white")
turtle.fillcolor("white")
turtle.begin_fill()
for i in range(5):
    turtle.forward(width)
    turtle.left(72)
    turtle.forward(width)
    turtle.right(144)
turtle.end_fill()
turtle.hideturtle()
turtle.done()