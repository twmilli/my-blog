import os
import datetime

def main():
    title = input("Enter the title: ").title()
    tag = input("Enter the tag: ").title()
    date = input("Enter the publishing date ")
    if date == "":
        now = datetime.datetime.now()
        date = str(now.year) + "-" + pad_zero(now.month) + "-" + pad_zero(now.day)
    else:
        date_array = date.split("-")
        date = str(date_array[2]) + "-" + pad_zero(date_array[0]) + "-" + pad_zero(date_array[1])
        
    path = "-".join(title.lower().split())
    dir_name = date + "-" + path
    os.mkdir("./src/pages/" + dir_name)
    f  = open("./src/pages/" + dir_name + "/index.md", "w+")
    f.write("---\n")
    f.write("tag: '" + tag + "'\n")
    f.write("title: '" + title + "'\n")
    f.write("published: true\n")
    f.write("date: '" + date + "'\n")
    f.write("path: '/" + path + "'\n")
    f.write("---\n\n")
    f.close()

def pad_zero(n):
    n = int(n)
    if n < 10:
        return "0" + str(n)
    return str(n)
if __name__ == "__main__":
    main()