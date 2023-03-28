from turtle import *


# 无轨迹跳跃
def my_goto(x, y):
    penup()
    goto(x, y)
    pendown()


# 眼睛
def eyes():
    tracer(False)
    a = 2.5
    for i in range(120):
        if 0 <= i < 30 or 60 <= i < 90:
            a -= 0.05
            lt(3)
            fd(a)
        else:
            a += 0.05
            lt(3)
            fd(a)
    tracer(True)


# 胡须
def beard():
    my_goto(-37, 135)
    seth(165)
    fd(60)
    my_goto(-37, 125)
    seth(180)
    fd(60)
    my_goto(-37, 115)
    seth(193)
    fd(60)
    my_goto(37, 135)
    seth(15)
    fd(60)
    my_goto(37, 125)
    seth(0)
    fd(60)
    my_goto(37, 115)
    seth(-13)
    fd(60)


# 嘴巴
def mouth():
    my_goto(5, 148)
    seth(270)
    fd(100)
    seth(0)
    circle(120, 50)
    seth(230)
    circle(-120, 100)


# 围巾
def scarf():
    fillcolor('#FF0000')
    begin_fill()
    seth(0)
    fd(200)
    circle(-5, 90)
    fd(10)
    circle(-5, 90)
    fd(207)
    circle(-5, 90)
    fd(10)
    circle(-5, 90)
    end_fill()


# 鼻子
def nose():
    my_goto(-10, 158)
    fillcolor('#e70010')
    begin_fill()
    circle(20)
    end_fill()


# 黑眼睛
def black_eyes():
    seth(0)
    my_goto(-20, 195)
    fillcolor('#000000')
    begin_fill()
    circle(13)
    end_fill()
    pensize(6)

    seth(0)
    my_goto(30, 196)
    fillcolor('#000000')
    begin_fill()
    circle(11)
    end_fill()
    pensize(6)

    my_goto(-17, 200)
    seth(0)
    fillcolor('#ffffff')
    begin_fill()
    circle(5)
    end_fill()

    my_goto(29, 200)
    seth(0)
    fillcolor('#ffffff')
    begin_fill()
    circle(5)
    end_fill()
    my_goto(0, 0)


# 脸
def face():
    fd(183)
    fillcolor('#ffffff')
    begin_fill()
    lt(45)
    circle(120, 100)
    seth(90)
    eyes()
    seth(180)
    penup()
    fd(60)
    pendown()
    seth(90)
    eyes()
    penup()
    seth(180)
    fd(64)
    pendown()
    seth(215)
    circle(120, 100)
    end_fill()


# 头型
def head():
    penup()
    circle(150, 40)
    pendown()
    fillcolor('#38B0DE')
    begin_fill()
    circle(150, 280)
    end_fill()


# 身体
def body():
    my_goto(0, 0)
    seth(0)
    penup()
    circle(150, 50)
    pendown()
    seth(30)
    fd(40)
    seth(70)
    circle(-30, 270)
    fillcolor('#38B0DE')
    begin_fill()
    seth(230)
    fd(80)
    seth(90)
    circle(1000, 1)
    seth(-89)
    circle(-1000, 10)
    seth(180)
    fd(70)
    seth(90)
    circle(30, 180)
    seth(180)
    fd(70)
    seth(100)
    circle(-1000, 9)
    seth(-86)
    circle(1000, 2)
    seth(230)
    fd(40)
    circle(-30, 230)
    seth(45)
    fd(81)
    seth(0)
    fd(203)
    circle(5, 90)
    fd(10)
    circle(5, 90)
    fd(7)
    seth(40)
    circle(150, 10)
    seth(30)
    fd(40)
    end_fill()


# 左手
def left_hand():
    seth(70)
    fillcolor('#ffffff')
    begin_fill()
    circle(-30)
    end_fill()


# 右手
def right_hand():
    my_goto(-133.97, -91.81)
    seth(50)
    fillcolor('#ffffff')
    begin_fill()
    circle(30)
    end_fill()


# 脚
def foot():
    my_goto(103.74, -182.59)
    seth(0)
    fillcolor('#ffffff')
    begin_fill()
    fd(15)
    circle(-15, 180)
    fd(90)
    circle(-15, 180)
    fd(10)
    end_fill()
    my_goto(-96.26, -182.59)
    seth(180)
    fillcolor('#ffffff')
    begin_fill()
    fd(15)
    circle(15, 180)
    fd(90)
    circle(15, 180)
    fd(10)
    end_fill()


# 铃铛
def bell():
    my_goto(-103.42, 15.09)
    fd(90)
    seth(70)
    fillcolor('#ffd200')
    begin_fill()
    circle(-20)
    end_fill()
    seth(170)
    fillcolor('#ffd200')
    begin_fill()
    circle(-2, 180)
    seth(10)
    circle(-100, 22)
    circle(-2, 180)
    seth(180 - 10)
    circle(100, 22)
    end_fill()
    goto(-13.42, 15.09)
    seth(250)
    circle(20, 110)
    seth(90)
    fd(15)
    dot(10)
    my_goto(0, -150)


# 口袋
def pocket():
    my_goto(-103.42, 15.09)
    seth(0)
    fd(38)
    seth(230)
    fillcolor('orange')
    begin_fill()
    circle(90, 260)
    end_fill()
    my_goto(5, -40)
    seth(0)
    fd(70)
    seth(-90)
    circle(-70, 180)
    seth(0)
    fd(70)


# 画哆啦A梦
def Doraemon():
    # 头部
    head()
    # 围巾
    scarf()
    # 脸
    face()
    # 红鼻子
    nose()
    # 嘴巴
    mouth()
    # 胡须
    beard()
    # 身体
    body()
    # 左手
    left_hand()
    # 右手
    right_hand()
    # 脚
    foot()
    # 口袋
    pocket()
    # 铃铛
    bell()
    # 画眼睛
    black_eyes()


if __name__ == '__main__':
    screensize(800, 600, "#f0f0f0")
    pensize(3)  # 画笔宽度
    speed(90)  # 画笔速度
    Doraemon()
    my_goto(-300, -300)
    write('路上阡陌', font=("Bradley Hand ITC", 25, "bold"))
    my_goto(230, 250)
    mainloop()

