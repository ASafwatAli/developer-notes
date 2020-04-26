(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{bx8N:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Python/Python-Collections.md"}});var s={_frontmatter:l},o=i.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(o,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"title"},"Title"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#title"}),"Title"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#table-of-contents"}),"Table of Contents")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#intro-to-python-collections"}),"Intro to Python Collections"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#extending-collections"}),"---- Extending Collections")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#shopping-list"}),"---- Shopping List")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#removing-items-from-a-list"}),"---- Removing Items from a List")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#removing-vowels-from-a-list-of-words-and-capitalising-them"}),"---- Removing vowels from a list of words and capitalising them")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#pop-an-item-from-the-list"}),"---- Pop an item from the list")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#slices"}),"Slices"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#slicing-with-a-step"}),"---- Slicing with a Step")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#deleting-or-replacing-slices"}),"---- Deleting or Replacing Slices")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#dictionaries"}),"Dictionaries"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#managing-keys"}),"---- Managing Keys")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#unpacking-dictionaries"}),"---- Unpacking Dictionaries")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#dictionary-iteration"}),"---- Dictionary Iteration")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#tuples"}),"Tuples"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#tuple-packing-and-unpacking"}),"---- Tuple Packing and Unpacking")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#tuples-with-functions"}),"---- Tuples with functions"))))))),Object(a.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(a.b)("a",{href:"#intro"},"title"),"---- ",Object(a.b)("a",{href:"#subsection"},"title"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"intro-to-python-collections"},"Intro to Python Collections"),Object(a.b)("p",null,"Appending and adding to lists."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-python"}),"### a_list=[1,2,3]\n### a_list\na_list.append([4,5]) # [1,2,3,[4,5]]\nour_list = list(range(10))\n### our_list\n[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n### our_list + [10,11,12]\n[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n### our_list\n[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n### our_list=our_list+[10,11,12]\n### our_list\n[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n")),Object(a.b)("p",null,"For splitting strings themselves we can use ",Object(a.b)("inlineCode",{parentName:"p"},'str.split(str="", num=string.count(str))')),Object(a.b)("h2",{id:"extending-collections"},"Extending Collections"),Object(a.b)("p",null,"Normally cleaner for larger lists than the ",Object(a.b)("inlineCode",{parentName:"p"},"+")," symbol."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-python"}),">>> our_list\n[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n>>> our_list.extend(range(13, 20))\n>>> our_list\n[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]\n")),Object(a.b)("p",null,"How do add new items inside the list?"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-python"}),">>> alpha= list('acdf')\n>>> alpha\n['a', 'c', 'd', 'f']\n>>> alpha.insert(1,'b')\n>>> alpha\n['a', 'b', 'c', 'd', 'f']\n>>> alpha.insert(4,'e')\n>>> alpha\n['a', 'b', 'c', 'd', 'e', 'f']\n")),Object(a.b)("h2",{id:"shopping-list"},"Shopping List"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'# note - you should use enumerate once you get there\n>>> def show_help():\n     print("\\nDoing a print_")\n\n>>> def show_list():\n     count=1\n     for item in shopping_list:\n             print("{}: {}".format(count, item))\n             count+=1\n')),Object(a.b)("p",null,"Other helpful use cases..."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'while True:\n    #do stuff\n    new_stuff = input("> ")\n\n    if new_stuff == "DONE":\n        print(\'Done\')\n        break\n    elif\n        #do other stuff\n        break\n    else\n        ...\n')),Object(a.b)("h2",{id:"removing-items-from-a-list"},"Removing Items from a List"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"a_list=list('abzde')\na_list.index('z')\ndel a_list[2]\n\na_string = \"Hello\"\n# this will delete the string - although the del can't be used to delete within the string\n# strings themselves are immutable\ndel a_string\n\n# remove for the list\nmy_list = [1,2,3,1]\n# remove ONLY removes the first instance from the list\nmy_list.remove(1)\nmy_list\n# [2,3,1]\n")),Object(a.b)("h2",{id:"removing-vowels-from-a-list-of-words-and-capitalising-them"},"Removing vowels from a list of words and capitalising them"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'names = ["Dennis", "Billy", "Trojan", "Horse"]\nvowels = list(\'aeiou\')\noutput = []\n\nfor name in names:\n    name_list = list(name.lower())\n\n    for vowel in vowels:\n        while True:\n            try:\n                state_list.remove(vowel)\n            except:\n                break\n    output.append(\'\'.join(name_list).capitalize())\n\nprint(output)\n')),Object(a.b)("h2",{id:"pop-an-item-from-the-list"},"Pop an item from the list"),Object(a.b)("p",null,"pop() removes an item by index but gives us the item."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'names = ["Dennis", "Billy", "Trojan", "Horse"]\nfirst = names.pop() // gives the first name\nanother = names.pop(2) // gives index 3\n')),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"// Quiz Challenge\n\n// 1. Move the '1' to the front of the list\n\nthe_list = [\"a\", 2, 3, 1, False, [1, 2, 3]]\n\n# Your code goes below here\nthe_list.insert(0, the_list.pop(3))\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"slices"},"Slices"),Object(a.b)("p",null,"Slices mean we can get back more than one item from a list. We call this ",Object(a.b)("inlineCode",{parentName:"p"},"slicing"),"."),Object(a.b)("p",null,"Something important to not is the useability of have the ","[:]"," call for a copy of the list!"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'my_string="Hello there!"\nmy_string[0:5]\n\nmy_list=list(range(1,6))\nmy_list[0:2] // same as my_list[:2]\nmy_list[2:len(my_list)]\n\nmy_list[1:]\nmy_list[:] // gets back a copy of the list\n\nmy_new_list = [4,2,1,3,5]\nmy_new_list.sort()\nmy_new_list\n')),Object(a.b)("h2",{id:"slicing-with-a-step"},"Slicing with a Step"),Object(a.b)("p",null,"How can we slice that move backward or that skip items?"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'my_list=list(range(20))\n\n# let\'s get the even numbers\nmy_list[::2]\n"Testing"[::2]\n\n# reversing\n"Slap"[::-1]\n\n# getting the middle slice - must swap positions!\nmy_list[8:2:-1]\n\n# negative indexes will also give you the positions from the end\nmy_list[-1]\n\n# example of grabbing the first four iterables through a Python function\ndef first_4(iter):\n    return iter[:4]\n')),Object(a.b)("h2",{id:"deleting-or-replacing-slices"},"Deleting or Replacing Slices"),Object(a.b)("p",null,"We can delete and replace with lists."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"my_list = [1,2, 'a', 'b', 5,6,'f','g']\n\n# what if I just want letters?\nmy_list[4:7] = ['e','f']\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Code Challenge")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"def sillycase(c):\n    return c[:round(len(c) / 2)].lower() + c[round(len(c) / 2):].upper()\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"dictionaries"},"Dictionaries"),Object(a.b)("p",null,"Key-Value organisation. They themselves do not have an order."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"my_dict = {'name': 'Dennis', 'job': 'Software Engineer'}\n\n# to access it, you need to use the key name\nmy_dict['name']\n")),Object(a.b)("p",null,"Dictionaries can contain anything - even your own custom classes."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"named_dict = { 'name' : { 'first' : 'Dennis', 'last': 'OKeeffe'} }\nnamed_dict['name']['first']\n\n# tuple game dict\ngame_dict = {(1,2) : True}\ngame_dict[(1,2)]\n")),Object(a.b)("p",null,"Challenge: Check if a dict key is in the list"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"def members(dict, keys):\n    counter = 0\n    for key in dict:\n        if key in keys:\n            counter = counter + 1\n    return counter\n")),Object(a.b)("h2",{id:"managing-keys"},"Managing Keys"),Object(a.b)("p",null,"We can ",Object(a.b)("inlineCode",{parentName:"p"},"del")," keys etc similar to the way we do it for keys."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),">>> my_dict['test'] = 'value'\n>>> my_dict\n{'test': 'value', 'job': 'Software Engineer', 'name': 'Dennis'}\n>>> del my_dict['test']\n>>> my_dict\n{'job': 'Software Engineer', 'name': 'Dennis'}\n\n# we can use update for multiple keys etc\n>>> my_dict.update({'job': 'Developer', 'age': 24, 'state': 'New South Wales'})\n>>> my_dict\n{'job': 'Developer', 'name': 'Dennis', 'age': 24, 'state': 'New South Wales'}\n")),Object(a.b)("p",null,"Challenge: Create a function named word_count() that takes a string. Return a dictionary with each word in the string as the key and the number of times it appears as the value."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"def word_count(sentence):\n    new_dict = {}\n    word_list = sentence.split()\n    count = 0\n\n    for original_word in word_list:\n        if original_word not in new_dict:\n            count = 0\n            for comparison_word in word_list:\n                if original_word == comparison_word:\n                    count += 1\n                    new_dict.update({original_word: count})\n    return new_dict\n")),Object(a.b)("h2",{id:"unpacking-dictionaries"},"Unpacking Dictionaries"),Object(a.b)("p",null,"You can give placeholders a name and use dictionaries to make it a little easier."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),">>> my_string = \"Hi my name is {name} and I live in {state}\"\n>>> my_string\n'Hi my name is {name} and I live in {state}'\n>>> my_string.format('Dennis', 'Sydney')\nTraceback (most recent call last):\n  File \"<stdin>\", line 1, in <module>\nKeyError: 'name'\n>>> my_string.format('name'='Dennis', state='Sydney')\n  File \"<stdin>\", line 1\nSyntaxError: keyword can't be an expression\n>>> my_string.format(name='Dennis', state='Sydney')\n'Hi my name is Dennis and I live in Sydney'\n\n# how do we make this programmatic?\n>>> test_dict = {'name':'Dennis', 'state':'Sydney'}\n>>> my_string.format(**test_dict)\n'Hi my name is Dennis and I live in Sydney'\n")),Object(a.b)("p",null,"Code Challenge: Create a function named string_factory that accepts a list of dictionaries and a string. Return a new list built by using .format() on the string, filled in by each of the dictionaries in the list."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"dicts = [\n    {'name': 'Michelangelo',\n     'food': 'PIZZA'},\n    {'name': 'Garfield',\n     'food': 'lasanga'},\n    {'name': 'Walter',\n     'food': 'pancakes'},\n    {'name': 'Galactus',\n     'food': 'worlds'}\n]\n\nstring = \"Hi, I'm {name} and I love to eat {food}!\"\n\ndef string_factory(list_of_dict, str):\n    new_list = []\n    for ind_list in list_of_dict:\n        new_list.append(str.format(**ind_list))\n    return new_list\n")),Object(a.b)("h2",{id:"dictionary-iteration"},"Dictionary Iteration"),Object(a.b)("p",null,"Again, Dictionaries in Python do not have a set order, but we can still iterate over them."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),">>> my_dict\n{'job': 'Developer', 'name': 'Dennis', 'age': 24, 'state': 'New South Wales'}\n>>> for thing in my_dict:\n...     print(thing)\n...\njob\nname\nage\nstate\n\n>>> for key in my_dict:\n...     print(my_dict[key])\n...\nDeveloper\nDennis\n24\nNew South Wales\n\n>>> for value in my_dict.values():\n...     print(value)\n...\nDeveloper\nDennis\n24\nNew South Wales\n")),Object(a.b)("p",null,"Create a function named most-classes that takes a dictionary of teachers. Each key is a teacher's name and their value is a list of classes they've taught. most-classes should return the teacher with the most classes."),Object(a.b)("p",null,"Next, create a function named num_teachers that takes the same dictionary of teachers and classes. Return the total number of teachers."),Object(a.b)("p",null,"Now, create a function named stats that takes the teacher dictionary. Return a list of lists in the format ","[",Object(a.b)("inlineCode",{parentName:"p"},"<teacher name>"),", ",Object(a.b)("inlineCode",{parentName:"p"},"<number of classes>"),"]",". For example, one item in the list would be ","['Dave McFarland', 1]","."),Object(a.b)("p",null,"Great work! Finally, write a function named courses that takes the teachers dictionary. It should return a single list of all of the courses offered by all of the teachers."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'def most_classes(teachers):\n    highest_value = 0\n    teacher_name = ""\n    for teacher in teachers:\n        if len(teachers[teacher]) > highest_value:\n            highest_value = len(teachers[teacher])\n            teacher_name = teacher\n    return teacher_name\n\ndef num_teachers(teachers):\n    return len(teachers)\n\ndef stats(teachers):\n    return_list = []\n    for teacher in teachers:\n        return_list.append([teacher, len(teachers[teacher])])\n    return return_list\n\ndef courses(teachers):\n    single_courses = []\n    for courses in teachers.values():\n        for course in courses:\n            if course not in single_courses:\n                single_courses.append(course)\n    return single_courses\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"tuples"},"Tuples"),Object(a.b)("p",null,"Lists themselves can be mutated, but sometimes we want the collections to stay the same. That's where tuples come in. They themselves are immutable."),Object(a.b)("p",null,"Tuples do not support item assignment."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),">>> tupleTest = (1,2,3)\n>>> tupleTest\n(1, 2, 3)\n>>> my_second_tuple = 1,2,3\n>>> my_second_tuple\n(1, 2, 3)\n>>> my_third_tuple = tuple([1,2,3])\n>>> my_third_tuple\n(1, 2, 3)\n>>> dir(tuple)\n['__add__', '__class__', '__contains__', '__delattr__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__getslice__', '__gt__', '__hash__', '__init__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'count', 'index']\n")),Object(a.b)("h2",{id:"tuple-packing-and-unpacking"},"Tuple Packing and Unpacking"),Object(a.b)("p",null,"Here we create a tuple that has valued assigned by another tuple. It's referred to as ",Object(a.b)("inlineCode",{parentName:"p"},"simulatneous assignment"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),">>> a,b = 1,2\n>>> a\n1\n>>> b\n2\n\n# unpacking\n>>> c = (3,4)\n>>> (d,e) = c\n>>> d\n3\n>>> e\n4\n\n# packing\n>>> f = d,e\n>>> f\n(3, 4)\n>>> f == c\nTrue\n\n# swapping the value\n>>> del a\n>>> del b\n>>> a = 1\n>>> b = 2\n>>> a,b = b,a\n>>> a\n2\n>>> b\n1\n\n# function example\n>>> def my_func():\n...     return 1,2,3\n...\n>>> my_func()\n(1, 2, 3)\n>>> a,b,c = my_func()\n>>> a\n1\n>>> b\n2\n>>> c\n3\n")),Object(a.b)("p",null,"Challenge: Create a function named stringcases that takes a string and returns a tuple of four versions of the string: uppercased, lowercased, titlecased (where every word's first letter is capitalized), and a reversed version of the string."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"def stringcases(str):\n    uppercased = str.upper()\n    lowercased = str.lower()\n    titlecased = str.title()\n    reverse = str[::-1]\n    return uppercased, lowercased, titlecased, reverse\n")),Object(a.b)("h2",{id:"tuples-with-functions"},"Tuples with functions"),Object(a.b)("p",null,"We can use enumerate for some packing etc."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),">>> alpha = list('abcdefghijklmnopqrstuvwxyz')\n>>> alpha\n['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']\n>>> dir(enumerate)\n['__class__', '__delattr__', '__doc__', '__format__', '__getattribute__', '__hash__', '__init__', '__iter__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'next']\n# prints the help\n>>> help(enumerate)\n>>> for (index, letter) in enumerate(alpha):\n...     print('{}: {}').format(index,letter)\n...\n0: a\n1: b\n2: c\n3: d\n4: e\n5: f\n6: g\n7: h\n8: i\n9: j\n10: k\n11: l\n12: m\n13: n\n14: o\n15: p\n16: q\n17: r\n18: s\n19: t\n20: u\n21: v\n22: w\n23: x\n24: y\n25: z\n\n>>> for step in enumerate(alpha):\n...     print('{}: {}'.format(*step))\n...\n0: a\n1: b\n2: c\n3: d\n4: e\n5: f\n6: g\n7: h\n8: i\n9: j\n10: k\n11: l\n12: m\n13: n\n14: o\n15: p\n16: q\n17: r\n18: s\n19: t\n20: u\n21: v\n22: w\n23: x\n24: y\n25: z\n")),Object(a.b)("p",null,"We can also unpack dictionaries in a similar matter:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),">>> my_dict\n{'job': 'Developer', 'name': 'Dennis', 'age': 24, 'state': 'New South Wales'}\n>>> for key, value in my_dict.items():\n...     print('{}: {}'.format(key.title(), value))\n...\nJob: Developer\nName: Dennis\nAge: 24\nState: New South Wales\n")),Object(a.b)("p",null,"Create a function named combo() that takes two iterables and returns a list of tuples. Each tuple should hold the first item in each list, then the second set, then the third, and so on. Assume the iterables will be the same length."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"def combo(iter1, iter2):\n    ret = []\n    length = len(iter1)\n    counter = 0\n    while counter < length:\n        ret.append((iter1[counter],iter2[counter]))\n        counter += 1\n    return ret\n\n# better alternatives\n\ndef combo(iterable_1, iterable_2):\n  list_of_tuples = []\n  for index in range(len(iterable_1)):\n    list_of_tuples.append((iterable_1[index], iterable_2[index]))\n\n  return list_of_tuples\n\ndef combo(iterable_1, iterable_2):\n  list_of_tuples = []\n  for index, item2 in enumerate(iterable_2):\n    list_of_tuples.append( (iterable_1[index], item2) )\n\n  return list_of_tuples\n\ndef combo(iterable_1, iterable_2):\n  return list(zip(iterable_1, iterable_2))\n\ndef combo(iter1, iter2):\n  combo_list = []\n  for index, value in enumerate(iter1):\n    tuple = value, iter2[index]\n    combo_list.append(tuple)\n  return combo_list\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Python-Collections.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-python-python-collections-md-504e0d7709b94630295d.js.map