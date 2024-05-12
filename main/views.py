from django.shortcuts import render

def quiz(request):
    return render(request, 'main/quiz.html')

def converter(request):
    return render(request, 'main/converter.html')

def calculator(request):
    return render(request, 'main/calculator.html')
